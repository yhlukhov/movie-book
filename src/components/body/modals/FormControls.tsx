import { FC, useState } from 'react'
import { Field, useField } from 'formik'
import { Input } from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons'

type TextFieldProps = {
  label: string
  type?: string
  name: string
  placeholder: string
}
type TextAreaProps = {
  label: string
  name: string
  placeholder: string
}
type SelectAreaProps = {
  label: string
  name: string
  options: string[]
  placeholder: string
}
type DatePickerProps = {
  label: string
  name: string
  type: string
}

//   Text Input Field
export const TextField: FC<TextFieldProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <Input>
      <label>{label}</label>
      <input {...field} {...props} />
      {meta.error && meta.touched && <div className='error'>{meta.error}</div>}
    </Input>
  )
}

//   Text Input Area
export const TextArea: FC<TextAreaProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <Input>
      <label>{label}</label>
      <textarea {...field} {...props} />
      {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
    </Input>
  )
}

//   Select Options Area
export const SelectArea: FC<SelectAreaProps> = ({ label, ...props }) => {
  const { name, options, placeholder } = props
  const [open, setOpen] = useState(false)
  const [field, meta] = useField(props)
  const value = field.value
  const handleToggle = () => setOpen((prev) => !prev)
  return (
    <Input>
      <label>{label}</label>
      <input
        className={value.length > 0 ? 'select-value' : 'select-value-placeholder'}
        placeholder={placeholder}
        value={value.length > 0 ? value.join(', ') : placeholder}
        readOnly
        onClick={handleToggle}
      />
      <div className={open ? 'up-arrow' : 'down-arrow'} />
      {open && (
        <div className='options' onMouseLeave={handleToggle}>
          {options.map((item) => (
            <label key={item}>
              <Field type='checkbox' name={name} value={item} />
              {item}
            </label>
          ))}
        </div>
      )}
      {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
    </Input>
  )
}

// Date Picker
export const DatePicker: FC<DatePickerProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <Input>
      <label>{label}</label>
      <input {...field} {...props} className={field.value ? '' : 'placeholder'} />
      <FontAwesomeIcon icon={faCalendarDays} className='calendar-icon' />
      {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
    </Input>
  )
}
