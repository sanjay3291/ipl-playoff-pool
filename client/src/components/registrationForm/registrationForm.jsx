import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import SortTeams from "./sortTeams/sortTeams";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NameSchema = Yup.object().shape({
  username: Yup.string()
    .min(4, "Mininum 4 characters!")
    .max(25, "Maximum 25 characters!")
    .required("username is required"),

  groupname: Yup.string()
    .min(4, "Mininum 4 characters!")
    .max(15, "Maximum 15 characters!")
    .required(
      "Group name is required, it should have been provided by your group lead"
    ),
});

class RegistrationForm extends Component {
  constructor() {
    super();
    this.state = {
      teamsObject: {},
      serverObject: {},
    };
    this.sendTeamsObject = this.sendTeamsObject.bind(this);
  }

  sendTeamsObject(teamsObject) {
    this.setState({ teamsObject: teamsObject });
  }
  notifysuccess = () =>
    toast.success("Registration successful !", { autoClose: false });
  notifyerror = () =>
    toast.error("There was an error during submission, please try again !", {
      autoClose: false,
    });

  render() {
    const { teamsObject, serverObject } = this.state;

    return (
      <div className="container-fluid">
        <div className="row mb-3">
          <div className="col-12 text-center">
            <h1 className="mt-5">Enter your details</h1>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12 text-left">
            <Formik
              initialValues={{ username: "", groupname: "" }}
              validationSchema={NameSchema}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                serverObject.username = values.username;
                serverObject.groupname = values.groupname;
                var teamsObject_updated = [
                  {
                    id: 8,
                    team: "CSK",
                  },
                  {
                    id: 7,
                    team: "DC",
                  },
                  {
                    id: 6,
                    team: "KKR",
                  },
                  {
                    id: 5,
                    team: "PBKS",
                  },
                  {
                    id: 4,
                    team: "MI",
                  },
                  {
                    id: 3,
                    team: "RCB",
                  },
                  {
                    id: 2,
                    team: "RR",
                  },
                  {
                    id: 1,
                    team: "SRH",
                  },
                ];
                if (Object.keys(teamsObject).length === 0) {
                  serverObject.teamsObject = teamsObject_updated;
                } else {
                  serverObject.teamsObject = teamsObject;
                }

                await axios.post("/submitData", serverObject).then(
                  (res) => {
                    this.notifysuccess();
                  },
                  (error) => {
                    console.log(error);
                    this.notifyerror();
                  }
                );
                resetForm({});
                setSubmitting(false);
              }}
            >
              {({ touched, errors, isSubmitting }) => (
                <Form>
                  <div className="row mb-3 justify-content-center">
                    <div className="col-sm-6 text-left">
                      <div className="form-group">
                        <label htmlFor="username">
                          <h3>User Name</h3>
                        </label>
                        <Field
                          type="string"
                          name="username"
                          placeholder="Enter username"
                          className={`form-control ${
                            touched.username && errors.username
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                        <ErrorMessage
                          component="div"
                          name="username"
                          className="invalid-feedback"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3 justify-content-center">
                    <div className="col-sm-6 text-left">
                      <div className="form-group">
                        <label htmlFor="groupname">
                          <h3>Group Name</h3>
                        </label>
                        <Field
                          type="string"
                          name="groupname"
                          placeholder="Enter Group Name"
                          className={`form-control ${
                            touched.groupname && errors.groupname
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                        <ErrorMessage
                          component="div"
                          name="groupname"
                          className="invalid-feedback"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3 justify-content-center">
                    <div className="col-sm-6 text-center">
                      <SortTeams sendTeamsObject={this.sendTeamsObject} />
                    </div>
                  </div>
                  <div className="row mb-3 justify-content-center">
                    <div className="col-lg-1 text-center">
                      <button
                        type="submit"
                        className="btn-lg btn-primary btn-block"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Please wait..." : "Submit"}
                      </button>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-lg-12 text-center">
                      <ToastContainer />
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    );
  }
}

export default RegistrationForm;
