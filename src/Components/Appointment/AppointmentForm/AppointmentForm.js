import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    data.service = appointmentOn;
    data.date = date;
    data.created = new Date();

    fetch('http://localhost:5000/addAppointment', {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(success => {
      if(success){
        alert('Appointment created successfully');
        closeModal();
      }
    })
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className="text-center text-brand">{appointmentOn}</h2>
        <p className="text-secondary text-center"><small>ON {date.toDateString()}</small></p>
        <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3 from-group">
            <input {...register('name', { required: true })} name="name" placeholder="Your Name" className="form-control" />
            {errors.name && <span style={{color: 'red'}}>This field is required</span>}
          </div>

          <div className="mb-3 from-group">
            <input {...register('phone', { required: true })} name="phone" placeholder="Phone Number" className="form-control" />
            {errors.phone && <span style={{color: 'red'}}>This field is required</span>}
          </div>

          <div className="mb-3 from-group">
            <input {...register('email', { required: true })} name="email" placeholder="Email" className="form-control" />
            {errors.email && <span style={{color: 'red'}}>This field is required</span>}
          </div>

          <div className="mb-3 row from-group">

            <div className="col-4">
              <select {...register('gender', { required: true })} className="form-control" name="gender">
                <option disabled={true} value="Not set">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Not set">Others</option>
              </select>
            </div>

            <div className="col-4">
              <input {...register('age', { required: true })} className="form-control" name="age" placeholder="Your Age" />
              {errors.age && <span style={{color: 'red'}}>This field is required</span>}         
            </div>

            <div className="col-4">
              <input {...register('weight', { required: true })} className="form-control" name="weight" placeholder="Weight" />
              {errors.weight && <span style={{color: 'red'}}>This field is required</span>}
            </div>
          </div>

          <div className="d-flex justify-content-end form-group text-right">
            <button type="submit" className="btn btn-brand">Send</button>
          </div>

        </form>
      </Modal>
    </div>
  );
};

export default AppointmentForm;
