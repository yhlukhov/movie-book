import { FC } from 'react'
import * as yup from 'yup'
import { Formik } from 'formik'
import { DatePicker, SelectArea, TextArea, TextField } from './FormControls'
import { genreList, GenreType, MovieType, MovieFormData } from '../../../types'
import { useAppDispatch, addMovie, editMovie  } from '../../../store'
import { StyledForm } from './styled'

type PropsType = {
  movie?: MovieType
  handleClose: (success?: boolean | undefined) => void
}

// Add or Edit movie. If movie prop is present - it will open modal to edit movie
export const MovieForm: FC<PropsType> = ({ movie, handleClose }) => {
  const dispatch = useAppDispatch()

  const initialValues = movie
    ? {
        title: movie.title,
        overview: movie.overview,
        poster_path: movie.poster_path,
        vote_average: movie.vote_average,
        runtime: movie.runtime ? movie.runtime : '',
        genres: movie.genres,
        release_date: movie.release_date,
      }
    : {
        title: '',
        overview: '',
        poster_path: '',
        vote_average: '',
        runtime: '',
        genres: [] as Array<GenreType>,
        release_date: '',
      }

  const handleSubmit = (values: MovieFormData) => {
    if (movie) { // edit movie
      const movieUpdate = { ...movie, ...values }
      dispatch(editMovie(movieUpdate))
    } else { // add movie
      dispatch(addMovie(values))
    }
    handleClose(true)
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={movieSchema}
      onSubmit={(values) => handleSubmit(values as MovieFormData)}
    >
      {({ handleReset }) => (
        <StyledForm data-testid='add-movie-modal'>
          <div className='input-area'>
            <div className='left-side'>
              <SelectArea
                label='Select genre'
                name='genres'
                options={genreList}
                placeholder='Select genre'
              />
              <TextField label='Title' name='title' type='text' placeholder='Movie title' />
              <TextField label='Movie url' name='poster_path' type='text' placeholder='https://' />
            </div>
            <div className='right-side'>
              <DatePicker label='Release date' name='release_date' type='date' />
              <TextField label='Rating' name='vote_average' type='number' placeholder='7.8' />
              <TextField label='Runtime' name='runtime' type='number' placeholder='minutes' />
            </div>
          </div>
          <div>
            <TextArea label='Overview' name='overview' placeholder='Description' />
          </div>
          <div className='control-area'>
            <button type='button' className='reset' onClick={handleReset}>
              Reset
            </button>
            <button type='submit' className='submit'>
              Submit
            </button>
          </div>
        </StyledForm>
      )}
    </Formik>
  )
}

const movieSchema = yup.object().shape({
  title: yup.string().max(45, 'Must be 30 characters or less').required('Required'),
  poster_path: yup.string().url().required('Required'),
  vote_average: yup.number().max(10, 'Must be between 0 and 10'),
  runtime: yup.number().max(360, 'Must be between 0 and 360').required('Required'),
  genres: yup.array().min(1, 'Required'),
  overview: yup.string().required('Required'),
  release_date: yup.date().max(new Date(), 'Must be earlier than today'),
})