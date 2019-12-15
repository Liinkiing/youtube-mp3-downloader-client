import React from 'react'
import styled, { css } from 'styled-components'
import useForm from 'react-hook-form'
import { YOUTUBE_REGEX } from '~/utils'
import RippleButton from '~/components/ui/RippleButton'
import { FiArrowRight } from 'react-icons/fi'
import AppInput from '~/components/ui/AppInput'
import { theme } from '~/styles/themes'
import { AnimatePresence, motion } from 'framer-motion'

interface FormValues {
  readonly url: string
}

interface Props {
  readonly onVideoSubmitted: (values: FormValues) => void
}

const SearchButton = styled(RippleButton)``

const SearchFormInner = styled.form`
  margin-top: 56px;
  display: flex;
  align-items: center;
  & ${SearchButton} {
    margin-left: 35px;
    border-radius: 30px;
    padding: 20px;
  }
`

const SearchInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

const SearchInput = styled(AppInput)<{ hasError: boolean }>`
  width: 40vw;
  min-width: 560px;
  ${props =>
    props.hasError &&
    css`
      border-color: ${theme(props).colors.error} !important;
    `}
`

const ErrorMessage = styled(motion.div)`
  position: absolute;
  top: calc(100% + 2rem);
  color: ${props => theme(props).colors.error};
  font-weight: 700;
`

const SearchForm: React.FC<Props> = ({ onVideoSubmitted }) => {
  const { register, handleSubmit, errors, formState } = useForm<FormValues>()
  const onSubmit = handleSubmit(data => {
    onVideoSubmitted(data)
  })

  return (
    <SearchFormInner onSubmit={onSubmit}>
      <SearchInputContainer>
        <SearchInput
          hasError={!!errors.url}
          tabIndex={1}
          placeholder="YouTube URL"
          name="url"
          ref={register({
            required: true,
            pattern: {
              value: YOUTUBE_REGEX,
              message: 'You must provide a correct YouTube url',
            },
          })}
        />
        <AnimatePresence>
          {errors.url && errors.url.type === 'required' && (
            <ErrorMessage key="required" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}>
              Please provide a value
            </ErrorMessage>
          )}
          {errors.url && errors.url.type === 'pattern' && (
            <ErrorMessage key="pattern" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}>
              {errors.url.message}
            </ErrorMessage>
          )}
        </AnimatePresence>
      </SearchInputContainer>
      <SearchButton type="submit">
        <FiArrowRight />
      </SearchButton>
    </SearchFormInner>
  )
}

export default SearchForm
