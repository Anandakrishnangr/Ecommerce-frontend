import React from 'react'
import { ButtonContained, ButtonOutlined, Calender, Checkbox, Closebutton, Dropdown, Fileupload, Input, Radio, Rangeslider, Signatrure, Textarea } from '../components'

export const FormElements = () => {
  return (
    <>
        {/* <h1>
            Butoon contained
            <ButtonContained />
        </h1> */}

        <h1>
            Button outlined
            <ButtonOutlined/>
        </h1>
        <h1>
            Button close
            <Closebutton/>
        </h1>
        <h1>
            Input
            <Input/>
        </h1>
        {/* <h1>
            clander
            <Calender/>
        </h1> */}
        <h1>
            checkbox
            <Checkbox/>
        </h1>
        <h1>
            Fileupload
            <Fileupload/>
        </h1>
        <h1>
            Dropdown
            <Dropdown/>
        </h1>
        <h1>
            Signatrure
            <Signatrure/>
        </h1>
        <h1>
            Radio
            <Radio/>
        </h1>
        <h1>
            Rangesilder
            <Rangeslider/>
        </h1>
        <h1>
            textArea
            <Textarea/>
        </h1>
    </>
  )
}
