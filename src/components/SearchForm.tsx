import React from 'react'
import styled from 'styled-components'
import useForm from 'react-hook-form'
import { useRouter } from 'next/router'
import { YOUTUBE_REGEX } from '~/utils'

interface FormValues {
  readonly url: string
}

const SearchFormInner = styled.form`
  padding: 50px;
`

const SearchForm: React.FC = () => {
  const router = useRouter()
  const { register, handleSubmit, errors, formState } = useForm<FormValues>()
  const onSubmit = handleSubmit(data => {
    router.push(`/process?v=${data.url}`, '/process')
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
