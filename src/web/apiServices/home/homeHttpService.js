import webHttpService from "../webHttpService";

export async function login(formData) {
  try {
    const { data } = await webHttpService.put(
      `${process.env.REACT_APP_APIENDPOINT}/user/login`,
      formData
    );
    console.log(data);

    return data;
  } catch (error) {
    alert(error.message);
  }
}

export async function userData(formData) {
  try {
    const { data } = await webHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/user/updateData`,
      formData
    );
    console.log(data);

    return data;
  } catch (error) {
    alert(error.message);
  }
}

export async function uploadImages(formData) {
  try {
    const { data } = await webHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/user/uploadImages`,
      formData
    );
    console.log(data);

    return data;
  } catch (error) {
    alert(error.message);
  }
}

export async function searchAll(formData) {
  try {
    const { data } = await webHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/user/searchAll`,
      formData
    );
    console.log(data);

    return data;
  } catch (error) {
    alert(error.message);
  }
}

export async function deleteData(id) {
  try {
    const { data } = await webHttpService.delete(
      `${process.env.REACT_APP_APIENDPOINT}/user/deleteData/${id}`
    );
    console.log(data);

    return data;
  } catch (error) {
    alert(error.message);
  }
}
