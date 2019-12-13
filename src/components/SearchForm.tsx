import React from 'react'
import styled from 'styled-components'
import useForm from 'react-hook-form'
import { YOUTUBE_REGEX } from '~/utils'
import RippleButton from '~/components/ui/RippleButton'
import { FiArrowRight } from 'react-icons/fi'
import AppInput from '~/components/ui/AppInput'

interface FormValues {
  readonly url: string
}

interface Props {
  readonly onVideoSubmitted: (url: string) => void
}

const SearchFormInner = styled.form`
  padding: 50px;
  display: flex;
  align-items: center;
`

const SearchButton = styled(RippleButton)`
  > svg {
    margin-left: 2rem;
  }
`

const SearchForm: React.FC<Props> = ({ onVideoSubmitted }) => {
  const { register, handleSubmit, errors, formState } = useForm<FormValues>()
  const onSubmit = handleSubmit(data => {
    onVideoSubmitted(data.url)
  })

  return (
    <SearchFormInner onSubmit={onSubmit}>
      <AppInput
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
      <SearchButton disabled={!formState.dirty && !formState.isValid} type="submit">
        Convert
        <FiArrowRight />
      </SearchButton>
    </SearchFormInner>
  )
}

export default SearchForm
