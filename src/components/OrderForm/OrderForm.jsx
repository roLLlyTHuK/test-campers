import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { toastSuccess } from "../../helpers/notification";
import {
  CalendarIcon,
  Container,
  InputContainer,
  StyledButton,
  StyledError,
  StyledInput,
  StyledTextArea,
} from "./OrderForm.styled";

const OrderForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required(),
    email: Yup.string().email("Invalid email address").required(),
    bookingDate: Yup.date().required(),
    comment: Yup.string(),
  });

  const initialValues = {
    name: "",
    email: "",
    bookingDate: null,
    comment: "",
  };

  const onSubmitClick = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      toastSuccess("Thank you for booking with us!");
      resetForm();
      setSubmitting(false);
    }, 400);
  };

  return (
    <Container>
      <h2>Book your campervan now</h2>
      <p>Stay connected! We are always ready to help you.</p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmitClick}
      >
        {({ isSubmitting, isValid, dirty, setFieldValue }) => (
          <Form>
            <InputContainer>
              <StyledInput type="text" name="name" placeholder="Name" />
            </InputContainer>
            <StyledError name="name" component="div" />

            <InputContainer>
              <StyledInput type="email" name="email" placeholder="Email" />
            </InputContainer>
            <StyledError name="email" component="div" />

            <InputContainer>
              <Field name="bookingDate">
                {({ field }) => (
                  <>
                    <StyledInput
                      as={DatePicker}
                      selected={field.value}
                      onChange={(date) => setFieldValue("bookingDate", date)}
                      dateFormat="dd/MM/yyyy"
                      placeholderText="Booking Date"
                    />
                    <CalendarIcon />
                  </>
                )}
              </Field>
            </InputContainer>
            <StyledError name="bookingDate" component="div" />

            <InputContainer>
              <StyledTextArea
                as="textarea"
                name="comment"
                placeholder="Comment"
                style={{ resize: "none", rows: "2" }}
              />
            </InputContainer>
            <StyledError name="comment" component="div" />

            <StyledButton
              type="submit"
              disabled={isSubmitting || !isValid || !dirty}
            >
              {isSubmitting ? "Sending..." : "Send"}
            </StyledButton>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default OrderForm;
