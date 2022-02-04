import React from 'react';
import { Formik, Form } from 'formik';
import { Container } from '../../../Auth/Containers';
import TextField from './TextField';
import { Button } from '../../../Auth/Mixins';
import * as Yup from 'yup';

function Post() {
  const validate = Yup.object({
    fullname: Yup.string()
    .required("Ism va familiyangizni to'liq kiriting"),
    tellNumber: Yup.number()
    .required("Telefon raqamingizni kiriting"),
    fullname: Yup.string()
    .required("Ism va familiyangizni to'liq kiriting"),
    professia: Yup.string()
    .required("Proffesiyani kiriting"),
    email: Yup.string()
    .required("Emailingizni kiriting"),
    data: Yup.string()
    .required("Ma'lumot kiritish sanasini belgilang"),
    time: Yup.string()
    .required("Ma'lumot kiritish vaqtini belgilang"),
    watchType: Yup.string()
    .required("Onlayn yoki oflaynligini tanlang"),
    category: Yup.string()
    .required("Kategoriyani kiriting"),
    sub_category: Yup.string()
    .required("Yo'nalishni kiriting"),
    link: Yup.string()
    .required("Linkni kiriting"),
    post_desc: Yup.string()
    .required("Post sarlavhasini to'ldiring"),
    description: Yup.string()
    .required("Ma'lumot kiriting"),
    image: Yup.string()
    .required("Rasm tanlang"),
    text_subject: Yup.string()
    .required("To'liq ma'lumotni kiriting"),
  })

  return (
    <Container>
      <Formik
        initialValues = {{
          personType: 'jismoniy_shaxs',
          fullName: '',
          tellNumber: '',
          professia: '',
          email: '',
          data: '2005-12-05',
          time: '14:55',
          watchType: '',
          category: '',
          sub_category: '',
          link: '',
          post_desc: '',
          description: '',
          image: '',
          text_subject: '',
        }}
        validationSchema={validate}
      
      >
        {formik => (
          <div>
            <Form>
              <TextField label="Jismoniy shaxs" selected name="person-type" id='yurdik_shaxs' type="radio" value='yurdik_shaxs' />
              <TextField label="Yuridik shaxs" name="person-type" id='jismoniy_shaxs' type="radio" value='jismoniy_shaxs' />
              <TextField label="Ism Familiya" name="fullname" type="text" />
              <TextField label="Tel raqam" name="tell_number" type="number" />
              <TextField label="Professiya" name="proffesia" type="text" />
              <TextField label="Email" name="email" type="email" />
              <TextField name="data" type="date" />
              <TextField name="time" type="time" />
              <TextField label="Online" name="time" type="time" />
              <TextField label="Kategoriya" name="category" type="text" />
              <TextField label="Yo'nalish" name="sub_category" type="text" />
              <TextField label="Linkni kiriting" name="link" type="url" />
              <TextField label="Post sarlavhasi" name="post_desc" type="text" />
              <TextField label="Description" name="description" type="text" />
              <TextField label="Rasm" name="image" type="file" />
              <TextField label="Mavzu matni" name="text_subject" type="text" />
              <Button type='submit'>Send</Button>
              <Button type='reset'>Reset</Button>
            </Form>
          </div>
        )}
      </Formik>
    </Container>
  );
}

export default Post;
