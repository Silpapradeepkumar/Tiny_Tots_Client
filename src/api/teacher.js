import { api } from "./instance";



import { teacher_api } from "./instance";

export const getChildrensRoleTeacher = async()=>{
  try {
    const response = await teacher_api.get('/childrens/');
    return response.data;
  } catch (error) {
    throw error || 'An error occurred during signup.';
  }
  }
  export const getHealthRecords = async(id)=>{
    try {
      const response = await api.get(`/gethealthrecords/${id}`);
      return response.data;
    } catch (error) {
      throw error || 'An error occurred during signup.';
    }
    }
  

export const getChildrensAllByStatusTrueOnly = async()=>{
  try {
    const response = await api.get('/all-childrens/');
    return response.data;
  } catch (error) {
    throw error || 'An error occurred during signup.';
  }
  }

  export const getChildrensAllByStatusaLL = async()=>{
    try {
      const response = await api.get('/all-childrens-all/');
      return response.data;
    } catch (error) {
      throw error || 'An error occurred during signup.';
    }
    }
  
  
  export const getChildrensScheduleByDoctor = async()=>{
    try {
      const response = await api.get('/schedules-by-id/');
      return response.data;
    } catch (error) {
      throw error || 'An error occurred during signup.';
    }
    }


  // progress
  export const getChildrensRoleTeacherByAttendanceBased = async()=>{
    try {
      const response = await teacher_api.get('/by-attendance-based/childrens');
      return response.data;
    } catch (error) {
      throw error || 'An error occurred during signup.';
    }
    }

    export const getTeacherAttendancesById = async(id)=>{
      try {
        const response = await api.get(`/by-attendance-byid/${id}`);
        return response.data;
      } catch (error) {
        throw error || 'An error occurred during signup.';
      }
      }

  

// teachers----------------
export const addingTeacher = async (propertyDatas) => {
    try {
      const response = await api.post('/teacher-register', propertyDatas);
      return response.data;
    } catch (error) {
      throw error || 'An error occurred during signup.';
    }
};


export const loginAsTeacher = async(data)=>{
  try {
    const response = await api.post(`/teacher-login`,data);
    return response.data;
  } catch (error) {
    throw error || 'An error occurred during signup.';
  }
}
// ---------------------------------------------
