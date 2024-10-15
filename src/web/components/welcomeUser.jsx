import React, { useEffect, useState } from "react";
import Header from "./commonComponent/header";
import { useForm } from "react-hook-form";
import { useAlert } from "react-alert";
import {
  deleteData,
  searchAll,
  uploadImages,
  userData,
} from "../apiServices/home/homeHttpService";
import { showAlert } from "./commonComponent/alertManager";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

function Welcome() {
  const [tab, setTab] = useState(1);
  const [type, setType] = useState(1);
  const [index, setIndex] = useState(0);
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);
  const [file4, setFile4] = useState(null);
  const [file5, setFile5] = useState(null);
  const [file6, setFile6] = useState(null);
  const [search, setSearch] = useState("");
  const [coords, setCoords] = useState({});

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const alert = useAlert();

  const handleImageUpload = (event, type) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.size > 300 * 1024) {
      showAlert(alert, "Minimum File size should be 300KB.", { timeout: 3000 });
      return;
    }
    if (type === 1) {
      setFile1(selectedFile);
    } else if (type === 2) {
      setFile2(selectedFile);
    } else if (type === 3) {
      setFile3(selectedFile);
    } else if (type === 4) {
      setFile4(selectedFile);
    } else if (type === 5) {
      setFile5(selectedFile);
    } else {
      setFile6(selectedFile);
    }
  };

  const imageUpload = async () => {
    const formData = new FormData();
    if (file1) formData.append("photo", file1);
    if (file2) formData.append("aadhar_front", file2);
    if (file3) formData.append("aadhar_back", file3);
    if (file4) formData.append("pan_photo", file4);
    if (file5) formData.append("passbook", file5);
    if (file6) formData.append("driving_license", file6);

    const response = await uploadImages(formData);
    if (!response.error) {
      return response.results.files;
    } else {
      showAlert(alert, response.message, { timeout: 3000 });
    }
  };
  console.log(coords);
  const onSubmit = async (data) => {
    if (file1 || file2 || file3 || file4 || file5 || file6) {
      const files = await imageUpload();
      files.reverse();
      if (file1) data.photo = files.pop();
      if (file2) data.aadhar_front = files.pop();
      if (file3) data.aadhar_back = files.pop();
      if (file4) data.pan_photo = files.pop();
      if (file5) data.passbook = files.pop();
      if (file6) data.driving_license = files.pop();
    }
    if (results?.length) {
      data._id = results[index]?._id;
    }
    console.log(data);
    const response = await userData(data);
    if (!response.error) {
      showAlert(alert, response.message, { timeout: 3000 });

      if (results?.length) {
        refetch();
        window.location.reload();
      } else {
        reset();
        setFile1(null);
        setFile2(null);
        setFile3(null);
        setFile4(null);
        setFile5(null);
        setFile6(null);
      }
    } else {
      showAlert(alert, response.message, { timeout: 3000 });
    }
  };

  const { data: results, refetch } = useQuery({
    queryKey: ["UsersList", search],
    queryFn: async () => {
      const formData = {
        account_number: type === 3 ? search : "",
        phone_number: type === 2 ? search : "",
        employee_name: type === 1 ? search : "",
      };
      return searchAll(formData);
    },
    onError: (error) => {
      console.log(error);
    },
    select: (data) => data.results.data,
  });

  const getEditData = (index) => {
    setTab(1);
    setIndex(index);

    let defaultValue = {};
    if (results?.length) {
      defaultValue.aadhar = results[index]?.aadhar;
      defaultValue.pan_card = results[index]?.pan_card;
      defaultValue.bank_name = results[index]?.bank_name;
      defaultValue.dob = results[index]?.dob;
      defaultValue.doj = results[index]?.doj;
      defaultValue.gender = results[index]?.gender;
      defaultValue.address = results[index]?.address;
      defaultValue.phone_number = results[index]?.phone_number;
      defaultValue.esi_number = results[index]?.esi_number;
      defaultValue.pf_number = results[index]?.pf_number;
      defaultValue.account_number = results[index]?.account_number;
      defaultValue.ifsc_code = results[index]?.ifsc_code;
      defaultValue.employee_name = results[index]?.employee_name;
      defaultValue.employee_id = results[index]?.employee_id;
      defaultValue.father_or_husband_name =
        results[index]?.father_or_husband_name;
      defaultValue.zone = results[index]?.zone;
      defaultValue.department = results[index]?.department;
      defaultValue.address_line2 = results[index]?.address_line2;
      defaultValue.address_line3 = results[index]?.address_line3;
      defaultValue.ward = results[index]?.ward;
      defaultValue.ps = results[index]?.ps;
      defaultValue.position = results[index]?.position;
      defaultValue.reporting_officer = results[index]?.reporting_officer;
      defaultValue.basic_salary = results[index]?.basic_salary;
      defaultValue.epf = results[index]?.epf;
      defaultValue.salary_disburasable = results[index]?.salary_disburasable;
      defaultValue.registration_charges = results[index]?.registration_charges;
      defaultValue.registration_fees = results[index]?.registration_fees;
      defaultValue.geo_location = results[index].geo_location;
      reset({ ...defaultValue });
    }
  };

  const deleteEmp = async (id) => {
    const response = await deleteData(id);
    if (!response.error) {
      showAlert(alert, response.message, { timeout: 3000 });
      refetch();
    } else {
      showAlert(alert, response.message, { timeout: 3000 });
    }
  };

  const openImage = (url) => {
    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.click();
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCoords(position.coords);
      console.log(position.coords);
    });
  }, []);

  console.log(results);
  return (
    <>
      <Header />
      <div className="admin_main justify-content-center">
        <div className="admin_contentpart">
          <div className="row comman_design mx-0 mt-4">
            <div className="col-12">
              <div className="row comman_table pt-md-4 pb-md-4 pb-3 px-md-4 px-2">
                <h3 className="mb-3 fs-5 fw-semibold text-center">Welcome!</h3>
                <div className="form-design">
                  <div className="form-group mb-0">
                    <label> Choose Option</label>
                  </div>
                </div>

                <div className="d-flex justify-content-between mb-3">
                  <div className="tabs nav nav-tabs common_tabs">
                    <label
                      className={
                        tab === 1 ? " tab nav-item active" : " tab nav-item "
                      }
                      onClick={() => {
                        setTab(1);
                      }}
                    >
                      Add New
                    </label>
                    <label
                      className={
                        tab === 2 ? " tab nav-item active" : " tab nav-item"
                      }
                      onClick={() => setTab(2)}
                    >
                      Update Existing
                    </label>
                  </div>
                </div>

                {tab === 1 ? (
                  <>
                    <h3 className="mb-3 fs-5 fw-semibold">User Details</h3>

                    <form
                      className="form-design"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label> Name</label>
                            <input
                              type="text"
                              className="form-control"
                              name="employee_name"
                              id="employee_name"
                              {...register("employee_name", {
                                required: true,
                              })}
                            />
                            {errors.employee_name &&
                              errors.employee_name.type === "required" && (
                                <p className="form-error">
                                  This field is required
                                </p>
                              )}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label> Mobile</label>
                            <input
                              type="number"
                              className="form-control"
                              name="phone_number"
                              id="phone_number"
                              {...register("phone_number", {
                                required: true,
                                maxLength: 10,
                                minLength: 10,
                              })}
                            />
                          </div>
                          {errors.phone_number &&
                            errors.phone_number.type === "required" && (
                              <p className="form-error">
                                This field is required
                              </p>
                            )}

                          {errors.phone_number &&
                            errors.phone_number.type === "maxLength" && (
                              <p className="form-error">
                                Please enter 9 digit number
                              </p>
                            )}
                          {errors.phone_number &&
                            errors.phone_number.type === "minLength" && (
                              <p className="form-error">
                                Please enter 9 digit number
                              </p>
                            )}
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label> Gender (M/F)</label>
                            <div className="form-group me-3">
                              <input
                                type="radio"
                                id="mobileNumber"
                                name="gender"
                                defaultValue="M"
                                className="me-1"
                                {...register("gender", {
                                  required: false,
                                })}
                              />
                              <label htmlFor="mobileNumber">Male</label>
                            </div>

                            <div className="form-group me-3">
                              <input
                                type="radio"
                                id="accountNumber"
                                name="gender"
                                defaultValue="F"
                                className="me-1"
                                {...register("gender", {
                                  required: false,
                                })}
                              />
                              <label htmlFor="accountNumber">Female</label>
                            </div>
                            {/* <input
                              type="text"
                              className="form-control"
                              name="gender"
                              id="gender"
                              {...register("gender", {
                                required: false,
                              })}
                            /> */}
                            {errors.gender &&
                              errors.gender.type === "required" && (
                                <p className="form-error">
                                  This field is required
                                </p>
                              )}
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Father's/Husband Name</label>
                            <input
                              type="text"
                              className="form-control"
                              name="father_or_husband_name"
                              id="father_or_husband_name"
                              {...register("father_or_husband_name", {
                                required: false,
                              })}
                            />
                            {errors.father_or_husband_name &&
                              errors.father_or_husband_name.type ===
                                "required" && (
                                <p className="form-error">
                                  This field is required
                                </p>
                              )}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Address Line 1</label>
                            <input
                              type="text"
                              className="form-control"
                              name="address"
                              id="address"
                              {...register("address", {
                                required: false,
                              })}
                            />
                            {errors.address &&
                              errors.address.type === "required" && (
                                <p className="form-error">
                                  This field is required
                                </p>
                              )}
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Address Line 2</label>
                            <input
                              type="text"
                              className="form-control"
                              name="address_line2"
                              id="address_line2"
                              {...register("address_line2", {
                                required: false,
                              })}
                            />
                            {errors.address_line2 &&
                              errors.address_line2.type === "required" && (
                                <p className="form-error">
                                  This field is required
                                </p>
                              )}
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Address Line 3</label>
                            <input
                              type="text"
                              className="form-control"
                              name="address_line3"
                              id="address_line3"
                              {...register("address_line3", {
                                required: false,
                              })}
                            />
                            {errors.address_line3 &&
                              errors.address_line3.type === "required" && (
                                <p className="form-error">
                                  This field is required
                                </p>
                              )}
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Ward</label>
                            <input
                              type="text"
                              className="form-control"
                              name="ward"
                              id="ward"
                              {...register("ward", {
                                required: false,
                              })}
                            />
                            {errors.ward && errors.ward.type === "required" && (
                              <p className="form-error">
                                This field is required
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Zone</label>
                            <input
                              type="text"
                              className="form-control"
                              name="zone"
                              id="zone"
                              {...register("zone", {
                                required: false,
                              })}
                            />
                            {errors.zone && errors.zone.type === "required" && (
                              <p className="form-error">
                                This field is required
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>PS</label>
                            <input
                              type="text"
                              className="form-control"
                              name="ps"
                              id="ps"
                              {...register("ps", {
                                required: false,
                              })}
                            />
                            {errors.ps && errors.ps.type === "required" && (
                              <p className="form-error">
                                This field is required
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>DOB (DD/MM/YYYY) </label>
                            <input
                              type="text"
                              className="form-control"
                              name="dob"
                              id="dob"
                              {...register("dob", {
                                required: false,
                              })}
                            />
                            {errors.dob && errors.dob.type === "required" && (
                              <p className="form-error">
                                This field is required
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group">
                            <label>DOJ (DD/MM/YYYY) </label>
                            <input
                              type="text"
                              className="form-control"
                              name="doj"
                              id="doj"
                              {...register("doj", {
                                required: false,
                              })}
                            />
                            {errors.doj && errors.doj.type === "required" && (
                              <p className="form-error">
                                This field is required
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Employee ID </label>
                            <input
                              type="text"
                              className="form-control"
                              name="employee_id"
                              id="employee_id"
                              {...register("employee_id", {
                                required: false,
                              })}
                            />
                            {errors.employee_id &&
                              errors.employee_id.type === "required" && (
                                <p className="form-error">
                                  This field is required
                                </p>
                              )}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Position </label>
                            <input
                              type="text"
                              className="form-control"
                              name="position"
                              id="position"
                              {...register("position", {
                                required: false,
                              })}
                            />
                            {errors.position &&
                              errors.position.type === "required" && (
                                <p className="form-error">
                                  This field is required
                                </p>
                              )}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Department </label>
                            <input
                              type="text"
                              className="form-control"
                              name="department"
                              id="department"
                              {...register("department", {
                                required: false,
                              })}
                            />
                            {errors.department &&
                              errors.department.type === "required" && (
                                <p className="form-error">
                                  This field is required
                                </p>
                              )}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Reporting Officer </label>
                            <input
                              type="text"
                              className="form-control"
                              name="reporting_officer"
                              id="reporting_officer"
                              {...register("reporting_officer", {
                                required: false,
                              })}
                            />
                            {errors.reporting_officer &&
                              errors.reporting_officer.type === "required" && (
                                <p className="form-error">
                                  This field is required
                                </p>
                              )}
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Basic Salary </label>
                            <input
                              type="number"
                              className="form-control"
                              name="basic_salary"
                              id="basic_salary"
                              {...register("basic_salary", {
                                required: false,
                              })}
                            />
                            {errors.basic_salary &&
                              errors.basic_salary.type === "required" && (
                                <p className="form-error">
                                  This field is required
                                </p>
                              )}
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group">
                            <label>ESI </label>
                            <input
                              type="text"
                              className="form-control"
                              name="esi_number"
                              id="esi_number"
                              {...register("esi_number", {
                                required: false,
                              })}
                            />
                            {errors.esi_number &&
                              errors.esi_number.type === "required" && (
                                <p className="form-error">
                                  This field is required
                                </p>
                              )}
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group">
                            <label>PF</label>
                            <input
                              type="text"
                              className="form-control"
                              name="pf_number"
                              id="pf_number"
                              {...register("pf_number", {
                                required: false,
                              })}
                            />
                            {errors.pf_number &&
                              errors.pf_number.type === "required" && (
                                <p className="form-error">
                                  This field is required
                                </p>
                              )}
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group">
                            <label>EPF </label>
                            <input
                              type="text"
                              className="form-control"
                              name="epf"
                              id="epf"
                              {...register("epf", {
                                required: false,
                              })}
                            />
                            {errors.epf && errors.epf.type === "required" && (
                              <p className="form-error">
                                This field is required
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Salary Disbursable </label>
                            <input
                              type="number"
                              className="form-control"
                              name="salary_disburasable"
                              id="salary_disburasable"
                              {...register("salary_disburasable", {
                                required: false,
                              })}
                            />
                            {errors.salary_disburasable &&
                              errors.salary_disburasable.type ===
                                "required" && (
                                <p className="form-error">
                                  This field is required
                                </p>
                              )}
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Bank Name </label>
                            <input
                              type="text"
                              className="form-control"
                              name="bank_name"
                              id="bank_name"
                              {...register("bank_name", {
                                required: false,
                              })}
                            />
                            {errors.bank_name &&
                              errors.bank_name.type === "required" && (
                                <p className="form-error">
                                  This field is required
                                </p>
                              )}
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group">
                            <label>AC Number </label>
                            <input
                              type="number"
                              className="form-control"
                              name="account_number"
                              id="account_number"
                              {...register("account_number", {
                                required: false,
                              })}
                            />
                            {errors.account_number &&
                              errors.account_number.type === "required" && (
                                <p className="form-error">
                                  This field is required
                                </p>
                              )}
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group">
                            <label>IFSC Code </label>
                            <input
                              type="text"
                              className="form-control"
                              name="ifsc_code"
                              id="ifsc_code"
                              {...register("ifsc_code", {
                                required: false,
                              })}
                            />
                            {errors.ifsc_code &&
                              errors.ifsc_code.type === "required" && (
                                <p className="form-error">
                                  This field is required
                                </p>
                              )}
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Aadhar Number</label>
                            <input
                              type="number"
                              className="form-control"
                              name="aadhar"
                              id="aadhar"
                              {...register("aadhar", {
                                required: false,
                              })}
                            />
                            {errors.aadhar &&
                              errors.aadhar.type === "required" && (
                                <p className="form-error">
                                  This field is required
                                </p>
                              )}
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Pan Card</label>
                            <input
                              type="text"
                              className="form-control"
                              name="pan_card"
                              id="pan_card"
                              {...register("pan_card", {
                                required: false,
                              })}
                            />
                            {errors.pan_card &&
                              errors.pan_card.type === "required" && (
                                <p className="form-error">
                                  This field is required
                                </p>
                              )}
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Registration Fee </label>
                            <input
                              type="number"
                              className="form-control"
                              name="registration_fees"
                              id="registration_fees"
                              {...register("registration_fees", {
                                required: false,
                              })}
                            />
                            {errors.registration_fees &&
                              errors.registration_fees.type === "required" && (
                                <p className="form-error">
                                  This field is required
                                </p>
                              )}
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Registration Charges </label>
                            <input
                              type="number"
                              className="form-control"
                              name="registration_charges"
                              id="registration_charges"
                              {...register("registration_charges", {
                                required: false,
                              })}
                            />
                            {errors.registration_charges &&
                              errors.registration_charges.type ===
                                "required" && (
                                <p className="form-error">
                                  This field is required
                                </p>
                              )}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Geo Location </label>
                            <input
                              type="text"
                              className="form-control"
                              name="geo_location"
                              id="geo_location"
                              // value={`${coords?.latitude}, ${coords.longitude}`}
                              // disabled
                              {...register("geo_location", {
                                required: false,
                              })}
                            />
                            {errors.geo_location &&
                              errors.geo_location.type === "required" && (
                                <p className="form-error">
                                  This field is required
                                </p>
                              )}
                          </div>
                        </div>
                        <div className="col-md-6"></div>
                        <p className="form-error">
                          Files Must be Upto 300KB Max
                        </p>
                        <div className="col-md-6 mb-3">
                          <div className="form-group">
                            <label>Photo Graph </label>
                          </div>
                          {file1 ||
                          (results?.length && results[index]?.photo) ? (
                            <>
                              <div className="img-wrap">
                                <img
                                  src={
                                    file1
                                      ? URL.createObjectURL(file1)
                                      : results?.length
                                      ? results[index]?.photo
                                      : ""
                                  }
                                  onClick={() =>
                                    openImage(
                                      file1
                                        ? URL.createObjectURL(file1)
                                        : results?.length
                                        ? results[index]?.photo
                                        : ""
                                    )
                                  }
                                  alt="Uploaded Image"
                                />
                              </div>
                              <label htmlFor="photo">
                                Change <i className="fas fa-cloud-upload-alt" />
                                <input
                                  id="photo"
                                  type="file"
                                  onChange={(e) => handleImageUpload(e, 1)}
                                />
                              </label>
                            </>
                          ) : (
                            <label
                              htmlFor="photo"
                              className="custom-file-upload"
                            >
                              <div className="text-center">
                                <i className="fas fa-cloud-upload-alt" />
                                <br />
                                Upload Image
                              </div>
                            </label>
                          )}
                          <input
                            id="photo"
                            type="file"
                            onChange={(e) => handleImageUpload(e, 1)}
                          />
                        </div>

                        <div className="col-md-6 mb-3">
                          <div className="form-group">
                            <label>Aadhar Front </label>
                          </div>
                          {file2 ||
                          (results?.length && results[index]?.aadhar_front) ? (
                            <>
                              <div className="img-wrap">
                                <img
                                  src={
                                    file2
                                      ? URL.createObjectURL(file2)
                                      : results?.length
                                      ? results[index]?.aadhar_front
                                      : ""
                                  }
                                  onClick={() =>
                                    openImage(
                                      file2
                                        ? URL.createObjectURL(file2)
                                        : results?.length
                                        ? results[index]?.aadhar_front
                                        : ""
                                    )
                                  }
                                  alt="Uploaded Image"
                                />
                              </div>
                              <label htmlFor="photo">
                                Change <i className="fas fa-cloud-upload-alt" />
                                <input
                                  id="photo"
                                  type="file"
                                  onChange={(e) => handleImageUpload(e, 1)}
                                />
                              </label>
                            </>
                          ) : (
                            <label
                              htmlFor="aadhar_front"
                              className="custom-file-upload"
                            >
                              <div className="text-center">
                                <i className="fas fa-cloud-upload-alt" />
                                <br />
                                Upload Image
                              </div>
                            </label>
                          )}
                          <input
                            id="aadhar_front"
                            type="file"
                            onChange={(e) => handleImageUpload(e, 2)}
                          />
                        </div>

                        <div className="col-md-6 mb-3">
                          <div className="form-group">
                            <label>Aadhar Back</label>
                          </div>
                          {file3 ||
                          (results?.length && results[index]?.aadhar_back) ? (
                            <>
                              <div className="img-wrap">
                                <img
                                  src={
                                    file3
                                      ? URL.createObjectURL(file3)
                                      : results?.length
                                      ? results[index]?.aadhar_back
                                      : ""
                                  }
                                  onClick={() =>
                                    openImage(
                                      file3
                                        ? URL.createObjectURL(file3)
                                        : results?.length
                                        ? results[index]?.aadhar_back
                                        : ""
                                    )
                                  }
                                  alt="Uploaded Image"
                                />
                              </div>
                              <label htmlFor="photo">
                                Change <i className="fas fa-cloud-upload-alt" />
                                <input
                                  id="photo"
                                  type="file"
                                  onChange={(e) => handleImageUpload(e, 1)}
                                />
                              </label>
                            </>
                          ) : (
                            <label
                              htmlFor="aadhar_back"
                              className="custom-file-upload"
                            >
                              <div className="text-center">
                                <i className="fas fa-cloud-upload-alt" />
                                <br />
                                Upload Image
                              </div>
                            </label>
                          )}
                          <input
                            id="aadhar_back"
                            type="file"
                            onChange={(e) => handleImageUpload(e, 3)}
                          />
                        </div>

                        <div className="col-md-6 mb-3">
                          <div className="form-group">
                            <label>Pan Card </label>
                          </div>
                          {file4 ||
                          (results?.length && results[index]?.pan_photo) ? (
                            <>
                              <div className="img-wrap">
                                <img
                                  src={
                                    file4
                                      ? URL.createObjectURL(file4)
                                      : results?.length
                                      ? results[index]?.pan_photo
                                      : ""
                                  }
                                  alt="Uploaded Image"
                                />
                              </div>
                              <label htmlFor="photo">
                                Change <i className="fas fa-cloud-upload-alt" />
                                <input
                                  id="photo"
                                  type="file"
                                  onChange={(e) => handleImageUpload(e, 1)}
                                />
                              </label>
                            </>
                          ) : (
                            <label
                              htmlFor="pan_photo"
                              className="custom-file-upload"
                            >
                              <div className="text-center">
                                <i className="fas fa-cloud-upload-alt" />
                                <br />
                                Upload Image
                              </div>
                            </label>
                          )}
                          <input
                            id="pan_photo"
                            type="file"
                            onChange={(e) => handleImageUpload(e, 4)}
                          />
                        </div>

                        <div className="col-md-6 mb-3">
                          <div className="form-group">
                            <label>Passbook </label>
                          </div>
                          {file5 ||
                          (results?.length && results[index]?.passbook) ? (
                            <>
                              <div className="img-wrap">
                                <img
                                  src={
                                    file5
                                      ? URL.createObjectURL(file5)
                                      : results?.length
                                      ? results[index]?.passbook
                                      : ""
                                  }
                                  onClick={() =>
                                    openImage(
                                      file5
                                        ? URL.createObjectURL(file5)
                                        : results?.length
                                        ? results[index]?.passbook
                                        : ""
                                    )
                                  }
                                  alt="Uploaded Image"
                                />
                              </div>
                              <label htmlFor="photo">
                                Change <i className="fas fa-cloud-upload-alt" />
                                <input
                                  id="photo"
                                  type="file"
                                  onChange={(e) => handleImageUpload(e, 1)}
                                />
                              </label>
                            </>
                          ) : (
                            <label
                              htmlFor="passbook"
                              className="custom-file-upload"
                            >
                              <div className="text-center">
                                <i className="fas fa-cloud-upload-alt" />
                                <br />
                                Upload Image
                              </div>
                            </label>
                          )}
                          <input
                            id="passbook"
                            type="file"
                            onChange={(e) => handleImageUpload(e, 5)}
                          />
                        </div>

                        <div className="col-md-6 mb-3">
                          <div className="form-group">
                            <label>Driving License </label>
                          </div>
                          {file6 ||
                          (results?.length &&
                            results[index]?.driving_license) ? (
                            <>
                              <div className="img-wrap">
                                <img
                                  src={
                                    file6
                                      ? URL.createObjectURL(file6)
                                      : results?.length
                                      ? results[index]?.driving_license
                                      : ""
                                  }
                                  onClick={() =>
                                    openImage(
                                      file6
                                        ? URL.createObjectURL(file6)
                                        : results?.length
                                        ? results[index]?.driving_license
                                        : ""
                                    )
                                  }
                                  alt="Uploaded Image"
                                />
                              </div>
                              <label htmlFor="photo">
                                Change <i className="fas fa-cloud-upload-alt" />
                                <input
                                  id="photo"
                                  type="file"
                                  onChange={(e) => handleImageUpload(e, 1)}
                                />
                              </label>
                            </>
                          ) : (
                            <label
                              htmlFor="driving_license"
                              className="custom-file-upload"
                            >
                              <div className="text-center">
                                <i className="fas fa-cloud-upload-alt" />
                                <br />
                                Upload Image
                              </div>
                            </label>
                          )}
                          <input
                            id="driving_license"
                            type="file"
                            onChange={(e) => handleImageUpload(e, 6)}
                          />
                        </div>

                        <div className="col-12">
                          <button type="submit" className="comman_btn w-fit">
                            Save
                          </button>
                        </div>
                      </div>
                    </form>
                  </>
                ) : (
                  <>
                    <div className="form-design ">
                      <div className="form-group mb-0">
                        <label>Search User</label>
                      </div>
                      <div className="d-flex">
                        <div className="form-group">
                          <input
                            type="radio"
                            id="employeeName"
                            name="option"
                            defaultChecked={type === 1 ? true : false}
                            className="me-1"
                            onChange={() => setType(1)}
                          />
                          <label htmlFor="employeeName">Employee Name</label>
                        </div>
                        <div className="form-group me-3">
                          <input
                            type="radio"
                            id="mobileNumber"
                            name="option"
                            className="me-1"
                            onChange={() => setType(2)}
                          />
                          <label htmlFor="mobileNumber">Mobile Number</label>
                        </div>

                        <div className="form-group me-3">
                          <input
                            type="radio"
                            id="accountNumber"
                            name="option"
                            defaultValue="accountNumber"
                            className="me-1"
                            onChange={() => setType(3)}
                          />
                          <label htmlFor="accountNumber">Account Number</label>
                        </div>
                      </div>

                      <div className="searchh_box position-relative mb-3">
                        <input
                          className="form-control"
                          type="search"
                          placeholder="Search"
                          value={search}
                          onChange={(e) => setSearch(e.target.value)}
                        />
                        <button>
                          <i className="fas fa-search" />
                        </button>
                      </div>

                      <div className="col-12">
                        <div className="row comman_table pt-md-3 pb-md-4 pb-3 px-md-3 px-2">
                          <div className="col-12">
                            <div className="table-responsive">
                              <table className="table table-hover">
                                <thead>
                                  <tr>
                                    <th>S.No.</th>
                                    <th>Employee Name</th>
                                    <th>Mobile</th>
                                    <th>Account Number</th>
                                    <th>Position</th>
                                    <th>Zone</th>
                                    <th>Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {results?.map((user, index) => (
                                    <tr key={user._id}>
                                      <td>{index + 1}</td>
                                      <td>{user.employee_name}</td>
                                      <td>{user.phone_number}</td>
                                      <td>{user.account_number}</td>
                                      <td>{user.position}</td>
                                      <td>{user.zone}</td>
                                      <td>
                                        <div className="d-flex">
                                          <Link
                                            to=""
                                            className="Table_btn me-2"
                                            onClick={() => {
                                              getEditData(index);
                                            }}
                                          >
                                            <i className="fa fa-edit" />
                                          </Link>
                                          <Link
                                            to=""
                                            className="Table_btn"
                                            onClick={() => deleteEmp(user._id)}
                                          >
                                            <i className="fa fa-trash" />
                                          </Link>
                                        </div>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
