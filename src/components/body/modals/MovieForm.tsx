import { FC } from 'react'
import * as yup from 'yup'
import { Formik } from 'formik'
import { MovieType } from '../../../types'
import { DatePicker, SelectArea, TextArea, TextField } from './FormControls'
import { genreList, GenreType } from '../../../types/MovieCard'
import { StyledForm } from './styled'
const dateToString = (date:Date) => {
  const yyyy = date.getFullYear()
  const mm = date.getMonth()
  const dd = date.getDate()
  return `${yyyy}-${mm}-${dd}`
}

type PropsType = {
  edit?: boolean
  movie?: MovieType
}

const MovieForm: FC<PropsType> = ({ edit, movie }) => {
  const initialValues =
    edit && movie
      ? {
          title: movie.title,
          description: movie.description,
          movieUrl: movie.movieUrl,
          rating: movie.rating,
          runtime: movie.runtime,
          genre: movie.genre,
          releaseDate: dateToString(movie.releaseDate),
        }
      : {
          title: '',
          description: '',
          movieUrl: '',
          rating: '',
          runtime: '',
          genre: [] as Array<GenreType>,
          releaseDate: '',
        }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={movieSchema}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 200))
        alert(JSON.stringify(values, null, 2))
      }}
    >
      {({ handleReset }) => (
        <StyledForm>
          <div className='input-area'>
            <div className='left-side'>
              <SelectArea
                label='Select genre'
                name='genre'
                options={genreList}
                placeholder='Select genre'
              />
              <TextField label='Title' name='title' type='text' placeholder='Movie title' />
              <TextField label='Movie url' name='movieUrl' type='text' placeholder='https://' />
            </div>
            <div className='right-side'>
              <DatePicker label='Release date' name='releaseDate' type='date' />
              <TextField label='Rating' name='rating' type='number' placeholder='7.8' />
              <TextField label='Runtime' name='runtime' type='number' placeholder='minutes' />
            </div>
          </div>
          <div>
            <TextArea label='Overview' name='description' placeholder='Description' />
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
  title: yup.string().max(30, 'Must be 30 characters or less').required('Required'),
  movieUrl: yup.string().url().required('Required'),
  rating: yup.number().max(10, 'Must be between 0 and 10').required('Required'),
  runtime: yup.number().max(360, 'Must be between 0 and 360').required('Required'),
  genre: yup.array().min(1, 'Required'),
  description: yup.string(),
  releaseDate: yup.date().max(new Date(), 'Must be earlier than today').required('Required'),
})

export default MovieForm
