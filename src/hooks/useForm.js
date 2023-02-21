import React, { useState } from 'react'

const useForm = (initialValue = { }) => {

    const [form, setForm] = useState(initialValue)

    const onInputChange = ({target})=>{
        const {name, value} = target
        setForm({
            ...form,
            [name]: value
        })
    }

    const onResetForm = ()=>{
        setForm(initialValue)
    }

  return {
    ...form,
    form,
    onInputChange,
    onResetForm,
  }
}

export default useForm