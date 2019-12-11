import React from 'react'
import styled from 'styled-components'
import useForm from 'react-hook-form'
import { YOUTUBE_REGEX } from '~/utils'

interface FormValues {
  readonly url: string
}

interface Props {
  readonly onVideoSubmitted: (url: string) => void
}

const SearchFormInner = styled.form`
  padding: 50px;
`

const SearchForm: React.FC<Props> = ({ onVideoSubmitted }) => {
  const { register, handleSubmit, errors, formState } = useForm<FormValues>()
  const onSubmit = handleSubmit(data => {
    onVideoSubmitted(data.url)
  })

  return (
    <SearchFormInner onSubmit={onSubmit}>
      <div>
        <input
          placeholder="Youtube URL"
          name="url"
          ref={register({
            required: true,
            pattern: {
              value: YOUTUBE_REGEX,
              message: 'You must provide a correct YouTube url',
            },
          })}
        />
        {errors.url && errors.url.type === 'required' && <div>Please provide a value</div>}
        {errors.url && errors.url.type === 'pattern' && <div>{errors.url.message}</div>}
      </div>
      <button disabled={!formState.dirty && !formState.isValid} type="submit">
        Send
      </button>
    </SearchFormInner>
  )
}

export default SearchForm
