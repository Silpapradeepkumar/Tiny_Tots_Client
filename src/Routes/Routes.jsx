import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AdminLayout from "../admin/AdminLayout"
import AdminLogin from "../admin/AdminLogin.jsx"
import AdminRegister from "../admin/AdminRegister.jsx"
import Reject from "../admin/Accept/Reject.jsx";
import Profile from "../admin/manageprofile/Profile.jsx";
import AcceptTeacher from "../admin/Accept/AcceptTeacher.jsx";
import AcceptDoctor from "../admin/Accept/AcceptDoctor.jsx";
import AcceptChildren from "../admin/Accept/AcceptChildren.jsx";
import AcceptParents from "../admin/Accept/AcceptParents.jsx";
import ManageTeacherProfile from "../admin/manageprofile/ManageTeacherProfile.jsx";
import ManageChildrenProfile from "../admin/manageprofile/ManageChildrenProfile.jsx";
import ManageDoctorsProfile from "../admin/manageprofile/ManageDoctorsProfile.jsx";
import ManageParentsProfile from "../admin/manageprofile/ManageParentsProfile.jsx";
import Attendence from "../admin/attendence/Attendence.jsx";
import TeacherAttendence from "../admin/attendence/TeacherAttendence.jsx";
import ChildrenAttendence from "../admin/attendence/ChildrenAttendence.jsx";
import Health from "../admin/healthrecords/Health.jsx";
import ChildrenRecords from "../admin/healthrecords/ChildrenRecords.jsx";
import Salary from "../admin/salary/Salary.jsx";
import TeacherSalary from "../admin/salary/TeacherSalary.jsx";
import DoctorSalary from "../admin/salary/DoctorSalary.jsx";
import Communication from "../admin/communication/Communication.jsx";
import TeacherCommunication from "../admin/communication/TeacherCommunication.jsx";
import DoctorCommunication from "../admin/communication/DoctorCommunication.jsx";
import ParentsCommunication from "../admin/communication/ParentCommunication.jsx";
import DoctorAdminMessage from "../admin/DoctorAdminMessage"
import TeacherAdminMessage from "../admin/communication/message/TeacherCommunication.jsx"
import HealthRecord from "../teacher/HealthRecord"
import ViewHealthRecord from "../teacher/ViewHealthRecord"
import TeacherLayout from "../teacher/TeacherLayout.jsx";
import TeacherManageActivity from "../teacher/TeacherManageActivity.jsx";
import TeachChildren from "../teacher/children/TeachChildren.jsx";
import FeedBack from "../teacher/FeedBack.jsx";
import TeachAttendenceForm from "../teacher/TeachAttendenceForm.jsx";
import TeachSalary from "../teacher/TeachSalary.jsx";
import TeachHealthRecords from "../teacher/TeachHealthRecords.jsx";
import Activity from "../admin/manageactivity/Activity.jsx";
import ManageChildrenActivity from "../admin/manageactivity/ManageChildrenActivity.jsx";
import TeacherFeedback from "../admin/feedback/TeacherFeedback.jsx";
import DoctorsFeedback from "../admin/feedback/DoctorsFeedback.jsx";
import ParentsFeedback from "../admin/feedback/ParentsFeedback.jsx";
import AdminFeedback from "../admin/feedback/AdminFeedback.jsx";
import DoctorLayout from "../doctor/DoctorLayout.jsx";
import DoctorLogin from "../doctor/DoctorLogin.jsx";
import DoctorRegister from "../doctor/DoctorRegister.jsx";
import DoctorsProfile from "../doctor/profile/DoctorProfile.jsx";
import DoctorConsultation from "../doctor/consultation/DoctorConsultation.jsx";
import Doctorhealthrecords from "../doctor/healthrecords/Doctorhealthrecords.jsx";
import Doctorcommunication from "../doctor/communication/Doctorcommunication.jsx";
import Doctorchildren from "../doctor/children/Doctorchildren.jsx";
import Doctorsalary from "../doctor/salary/Doctorsalary.jsx";
import Doctorfeedback from "../doctor/feedback/Doctorfeedback.jsx";
import MessageTeacherCommunicationOfParent from "./MessageTeacherCommunicationOfParent"
import ViewTeacherAttendance from "../teacher/ViewTeacherAttendance.jsx"
import ViewAllActivity from "../admin/ViewAllActivity.jsx"
import TeacherRegister from "../teacher/TeacherRegister.jsx";
import TeacherLogin from "../teacher/TeacherLogin.jsx"
import ChildrensAttendance from "../teacher/children/ChildrensAttendance.jsx";

import UserLayout from "../user/UserLayout.jsx";
import UserLogin from "../user/UserLogin.jsx";
import UserRegister from "../user/UserRegister.jsx"
import UserActivity from "../user/UserActivity.jsx"
import UserCalender from "../user/UserCalender.jsx"
import UserChildren from "../user/UserChildren.jsx"
import UserCommunication from "../user/UserCommunication.jsx"
import UserFeedback from "../user/UserFeedback.jsx";
import UserHealthRecords from "../user/UserHealthRecords.jsx"
import UserProfile from "../user/UserProfile.jsx"
import EditTeacher from "../admin/manageprofile/forms/editTeacher";
import EditChildrenProfile from "../admin/manageprofile/forms/EditChildren.jsx";
import EditDoctor from "../admin/manageprofile/forms/EditDoctor";
import EditUserProfile from "./EditUserProfile.jsx"
import ParentLogin from "../user/UserLogin.jsx"
import ParentRegister from "../user/UserRegister.jsx";
import EditParent from "../admin/manageprofile/forms/EditParent.jsx";
import AddChildren from "../user/AddChildren.jsx";

import ManageAdminCommunicationOfParent from "./ManageAdminCommunication"

import ViewRecords from "../ViewRecords"

import ParentAdminMessage from "../admin/communication/message/ParentCommunication.jsx"


// admin salary management
import AdminSalary from "../admin/salary/AdminSalary.jsx"
import AdminTeachersSalary from "../admin/salary/AdminTeachersSalary.jsx"
import AdminParentsSalary from "../admin/salary/AdminParentsSalary.jsx"
import AdminDoctorsSalary from "../admin/salary/AdminDoctorsSalary.jsx"
import AdminTeacherViewSalary from "../admin/salary/AdminTeacherViewSalary.jsx"
import AdminDoctorSalary from "../admin/salary/AdminDoctorSalary.jsx"
import AdminAttendance from "../admin/attendence/AdminAttendance"
// teacher
import ManageTeacherParentMessage from "../teacher/ManageTeacherParentMessage.jsx"
import ManageAdminCommunication from "../teacher/ManageAdminCommunication.jsx"
import TeacherProfile from "../teacher/TeacherProfile.jsx"
import TeacherEditProfile from "../teacher/TeacherEditProfile.jsx"
import TeachChildrenDetailedView from "../teacher/TeachChildrenDetailedView.jsx"
import TeachChildrenActivity from "../teacher/TeachChildrenActivity.jsx"
import MessageAdmin from "../teacher/MessageAdmin.jsx"
import ViewTeachersCommunication from "../teacher/ViewTeachersCommunication.jsx"
import ManageTeacherParentsCommunication from "../teacher/ManageTeacherParentsCommunication.jsx"
import AdminGetChildrensForAttendanceView from "../admin/attendence/AdminGetChildrensForAttendanceView"
import TeachChildrenViewActivity from "../teacher/TeachChildrenViewActivity.jsx"

import TeachChildrenAttendance  from "../teacher/TeachChildrenAttendance.jsx"

// teacher

import TeacherAttendanceSelfe from "../teacher/TeacherAttendanceSelfe.jsx"
import MarkTeacherAttendance from "../teacher/MarkTeacherAttendance"
import ViewTeacherSelefAttendance from "../teacher/ViewTeacherSelefAttendance.jsx"
import AdminTeachersLists from "../teacher/AdminTeachersLists"
import AdminTeacherAttendance from "../teacher/AdminTeacherAttendance"
import ViewDoctorConsultationOfDoctor from "../teacher/ViewDoctorConsultationOfDoctor"
import AddHealthRecord from "../doctor/AddHealthRecord.jsx"
import GetHealthRecorByConsultingId from "../doctor/GetHealthRecorByConsultingId"
import DoctorsSalary from "../doctor/DoctorsSalary"

import UserHome from "../user/UserHome.jsx"
import AdminProfile from "../admin/Profile/Profile.jsx"
import DoctorsEditProfile from "../doctor/DoctorsEditProfile.jsx"
import DoctorHealthRecors from "../doctor/DoctorHealthRecors"
import AdminFeeManagement from "../admin/AdminFeeManagement"
import AdminEditProfile from "../admin/Profile/AdminEditProfile.jsx"
import AdminCildrenAttendance from "../admin/attendence/AdminCildrenAttendance"
import ManageTeacherDoctorMessage from "../teacher/ManageTeacherDoctorMessage"
import ViewUserCommunication from "../ViewUserCommunication.jsx"
import AttendacneOfChildrens from "../AttendacneOfChildrens"
import ManageTeacherDoctorsCommunication from "../teacher/ManageTeacherDoctorsCommunication"
import ManageTeacherCommunicationOfParent from "./ManageTeacherCommunicationOfParent.jsx"
import  ManageDoctorCommunicationOfParent from "./ManageDoctorCommunicationOfParent"
import MessageDoctorCommunicationOfParent from "./MessageDoctorCommunicationOfParent"
import ManageAdminCommunicationOfDoctor from "../doctor/ManageAdminCommunicationOfDoctor"
import ManageParentCommunicationOfDoctor from "../doctor/ManageParentCommunicationOfDoctor"
import ManageTeachersCommunicationOfDoctor from "../doctor/ManageTeachersCommunicationOfDoctor"
import MessageAdminDoctor from "../doctor/MessageAdmin.jsx"
import MessageParentDoctor from "../doctor/MessageParentDoctor"
import MessageTeachersCommunicationOfDoctor from "../doctor/MessageTeachersCommunicationOfDoctor"
import AttendacneOfTeachers from "../AttendacneOfTeachers"
import ViewAttendanceOfChildrensParent from "./ViewAttendanceOfChildrens"
import ViewAttendanceOfTeachersParent from "./ViewAttendanceOfTeachersParent.jsx"
import Feedback from "./Feedback"
import ParentsMessageByAdmin from "./ParentsMessageByAdmin"
import ViewAdminHealthRecords from "../admin/ViewAdminHealthRecords"
import AdminHealthRecords from "../admin/AdminHealthRecords"
import AdminActivity from "../admin/AdminActivity.jsx"
function Routes() {
  const router = createBrowserRouter([

    // admin --------------------------------
    {
      path: "/admin",
      element: <AdminLayout/>,
      children:[
        {
          path:"",
          element:<Profile/>
        },
        {
          path:"admin-edit-profile",
          element:<AdminEditProfile/>
        },
        {
          path:"health-records",
          element:<AdminHealthRecords/>
        },
        {
          path:"fee-management",
          element:<AdminFeeManagement/>
        },
        
     
        {
          path:"view-health-records/:id/:name",
          element:<ViewAdminHealthRecords/>
        },
        // to={`/admin/view-health-records/${item._id}/${item.name}`}
        
        {
          path:"admin-children-lists",
          element:<AdminGetChildrensForAttendanceView/>
        },
        
        {
          path:"admin-attendance",
          element:<AdminAttendance/>
        },
        {
          path:"view-childrens-attendance/:id/:name",
          element:<AdminCildrenAttendance/>
        },
        {
          path:"view-teachers-attendance/:id/:name",
          element:<AdminTeacherAttendance/>
        },
        
        {
          path:"view-teacher-attendance",
          element:<ViewTeacherSelefAttendance/>
        },
        {
          path:"admin-teachers-lists",
          element:<AdminTeachersLists/>
        },
        
        
        
        {
          path:"profile",
          element:<AdminProfile/>
        },
        {
          path:"salary",
          element:<AdminSalary/>
        },
        {
          path:"view-teacher-salaries/:id/:name",
          element:<AdminTeacherViewSalary/>
        },

        
        {
          path:"admin-teachers-salary",
          element:<AdminTeachersSalary/>
        },
        {
          path:"admin-doctors-salary",
          element:<AdminDoctorsSalary/>
        },
        {
          path:"admin-doctor-salary/:id/:name",
          element:<AdminDoctorSalary/>
        },
        {
          path:"attendence",
          element:<Attendence/>,
          children:[
            {
              path:"teacher-attendence",
              element: <TeacherAttendence/>
            },
            {
              path:"children-attendence",
              element: <ChildrenAttendence/>
            },
          ]
        },
        {
          path:"manage-teachers-profile",
          element: <ManageTeacherProfile/>
        },

        {
          path:"view-attendance/",
          element: <ViewTeacherAttendance/>
        },
        
        {
          path:"manage-parents-profile",
          element: <ManageParentsProfile/>
        },
        {
          path:"manage-doctors-profile",
          element: <ManageDoctorsProfile/>
        },
        {
          path:"manage-childrens-profile",
          element: <ManageChildrenProfile/>
        },
        // edit teachers
        {
          path:"edit-teacher-profile/:id/:name",
          element: <EditTeacher/>
        },
        {
          path:"edit-parent-profile/:id/:name",
          element: <EditParent/>
        },
        {
          path:"edit-doctor-profile/:id/:name",
          element: <EditDoctor/>
        },
        {
          path:"edit-children-profile/:id/:name",
          element: <EditChildrenProfile/>
        },
        

        {
          path:"manage-profile",
          element:<Profile/>,

        },
        {
          path:"healthrecords",
          element:<Health/>,
          children:[
            {
              path:"children-records",
              element: <ChildrenRecords/>
            },
          ]
        },
        {
          path:"salary",
          element:<Salary/>,
          children:[
            {
              path:"teacher-salary",
              element: <TeacherSalary/>
            },
            {
              path:"doctor-salary",
              element: <DoctorSalary/>
            },
          ]
        },
        {
          path:"communication",
          element:<Communication/>,
        },
        {
          path:"salary",
          element:<Salary/>,
          children:[
            {
              path:"teacher-salary",
              element: <TeacherSalary/>
            },
            {
              path:"doctor-salary",
              element: <DoctorSalary/>
            },
          ]
        },
        
        {
          path:"manage-teachers-communication",
          element:<TeacherCommunication/>,
        },
         {
          path:"admin-teacher-message/:id/:name",
          element:<TeacherAdminMessage/>,
        },
        {
          path:"manage-parents-communication",
          element: <ParentsCommunication/>
        },
        {
          path:"admin-parent-message/:id/:name",
          element: <ParentAdminMessage/>
        },
        {
          path:"manage-doctors-communication",
          element: <DoctorCommunication/>
        },
        {
          path:"admin-doctor-message/:id/:name",
          element: <DoctorAdminMessage/>
        },
        
        
        
        
        {
          path:"activity",
          element:<Activity/>,
        
        },
        {
          path:'view-activities/:id/:name',
          element:<ViewAllActivity/>
        },
        {
          path:"feedback",
          element:<AdminFeedback/>,
        },

      ]
    },

    // admin login
    {
      path: "/admin-login",
      element: <AdminLogin/>,
    },


    // parent login
    {
      path: "/parent-login",
      element: <UserLogin/>,
    },
    // user-register
    {
      path: "/parent-register",
      element: <UserRegister/>,
    },


    // teacher login
    {
      path: "/teacher-login",
      element: <TeacherLogin/>,
    },


    // teacher register
    {
      path: "/teacher-register",
      element: <TeacherRegister/>,
    },


    // teacher------------------------
    {
      path: "/teacher",
      element: <TeacherLayout/>,
      children:[
        {
          path:"dashboard",
          element:<h1>dashboard</h1>
        },
        {
          path:"teacher-attendance",
          element:<TeacherAttendanceSelfe/>
        },
        {
          path:"mark-teacher-attendance",
          element:<MarkTeacherAttendance/>
        },
        {
          path:"view-self-teacher-attendance",
          element:<ViewTeacherSelefAttendance/>
        },
        {
          path:"health-records",
          element:<HealthRecord/>
        },
        {
          path:"view-health-records/:id",
          element:<ViewHealthRecord/>
        },
        
        

        
        
        {
          path:"teacherProfile",
          element:<TeacherProfile/>
        },
        {
          path:"childrens",
          element:<TeachChildren/>
        },
        {
          path:"children/:id",
          element:< TeachChildrenDetailedView/>
        },
        
        {
          path:"activity",
          element:< TeachChildrenActivity/>
        },
        {
          path:"view-activites/:id",
          element:< TeachChildrenViewActivity/>
        },
        {
          path:"children-attendance",
          element:<TeachChildrenAttendance/>
        },
        {
          path:"manage-admin-communication",
          element:<ManageAdminCommunication/>
        },
        {
          path:"manage-admin-communication/:id",
          element:<MessageAdmin/>
        },
        
        
        
        
        {
          path:"teacher-profile",
          element:< TeacherProfile/>
        },
        {
          path:"teacher-edit-profile/:id",
          element:< TeacherEditProfile/>
        },
        
        
        {

          path:"manageactivity",
          element:<TeacherManageActivity/>
        },
        {
          path:"attendenceform",
          element:<TeachAttendenceForm/>
        },
        {
          path:"feedback",
          element:<FeedBack/>
        },
        {
          path:"salary",
          element:<TeachSalary/>
        },
        {
          path:"healthrecords",
          element:<TeachHealthRecords/>
        },
        {
          path:"attendance",
          element:<ChildrensAttendance/>
        },
        {
          path:"view-attendance/:id",
          element: <ViewTeacherAttendance/>
        },

        {
          path:"communication",
          element: <ViewTeachersCommunication/>
        },
        {
          path:"manage-parents-communication",
          element: <ManageTeacherParentsCommunication/>
        },
        {
          path:"manage-parent-communication/:id",
          element: <ManageTeacherParentMessage/>
        },
        // {
        //   path:"manage-admin-communication",
        //   element:<ManageAdminCommunication/>
        // },
        // {
        //   path:"manage-admin-communication/:id",
        //   element:<MessageAdmin/>
        // },
        {
          path:"manage-doctors-communication",
          element: <ManageTeacherDoctorsCommunication/>
        },
        {
          path:"manage-doctor-communication/:id",
          element: <ManageTeacherDoctorMessage/>
        },
        
        


      ]
    },


    // doctor login
    {
    path:"doctor-login",
    element:<DoctorLogin/>
    },

    // doctor register
    {
      path:"doctor-register",
      element:<DoctorRegister/>
      },



    // doctor----------------------------
    {
      path: "/doctors",
      element: <DoctorLayout/>,
      children:[
        {
          path:"dashboard",
          element:<h1>dashboard</h1>
        },
        {
          path:"doctor-edit-profile/:id",
          element:<DoctorsEditProfile/>
        },
        {
          path:"doctor-profile",
          element:<DoctorsProfile/>
        },
        
        {
          path:'view-doctor-consultation-ofdoctor/:id',
          element:<ViewDoctorConsultationOfDoctor/>
        },
        {
          path:'gethealthrecords/:id',
          element:<GetHealthRecorByConsultingId/>
        },
        {
          path:'salary',
          element:<DoctorsSalary/>
        },
        
        
        
      
      {
        path:'add-health-record/:id/:selfid',
        element:<AddHealthRecord/>
      },
        
      
      {
        path:'health-records',
        element:<DoctorHealthRecors/>
      },
        
        {
          path:"consultation-schedule",
          element:<DoctorConsultation/>
        },
        {
          path:"doctor-healthrecords",
          element:<Doctorhealthrecords/>
        },
        {
          path:"doctor-communication",
          element:<Doctorcommunication/>
        },
        {
          path:"doctor-children",
          element:<Doctorchildren/>
        },

        {
          path:"",
          element:<Doctorchildren/>
        },
      
        {
          path:"doctor-feedback",
          element:<Doctorfeedback/>
        },
        {
          path:"manage-admin-communication",
          element:<ManageAdminCommunicationOfDoctor/>
        },
        {
          path:"manage-admin-communication/:id",
          element:<MessageAdminDoctor/>
        },


        {
          path:"manage-parents-communication",
          element:<ManageParentCommunicationOfDoctor/>
        },
        {
          path:"manage-parents-communication/:id",
          element:<MessageAdminDoctor/>
        },
        {
          path:"manage-parent-communication/:id",
          element:<MessageParentDoctor/>
        },
        // 
        {
          path:"manage-teachers-communication",
          element:<ManageTeachersCommunicationOfDoctor/>
        },
        {
          path:"manage-teachers-communication/:id",
          element:<MessageTeachersCommunicationOfDoctor/>
        },
        // 
        

        
         
       
      ]
    },


    // parents----------------------------------------
    {
      path: "/",
      element: <UserLayout/>,
      children:[
        {
          path:"",
          element:<UserHome/>
        },
        {
          path:"view-records/:id",
          element:<ViewRecords/>
        },
        
      
      {
        path:"view-user-communication",
        element:<ViewUserCommunication/>
      },


        
        {
          path:"userprofile",
          element:<UserProfile/>
        },
        {
          path:"children",
          element:< UserChildren/>
        },
        {
          path:"healthrecords",
          element:<UserHealthRecords/>
        },
        {
          path:"add-children",
          element:<AddChildren/>
        },
        {
          path:"availabilitycalender",
          element:<UserCalender/>
        },

        {
          path:"usercommunication",
          element:<UserCommunication/>
        },

        {
          path:"activity",
          element:<UserActivity/>
        },
        {
          path:"userfeedback",
          element:<UserFeedback/>
        },
        {
          path:"childrens-attendance",
          element:<AttendacneOfChildrens/>
        },
        {
          path:"teachers-attendance",
          element:<AttendacneOfTeachers/>
        },
        {
          path:"view-attendance-ofchildrens-parent/:id",
          element:<ViewAttendanceOfChildrensParent/>
        },
        {
          path:"view-attendance-ofteachers-parent/:id",
          element:<ViewAttendanceOfTeachersParent/>
        },
        {
          path:"manage-admin-communication",
          element:<ManageAdminCommunicationOfParent/>
        },
        {
          path:"manage-teacher-communication",
          element:<ManageTeacherCommunicationOfParent/>
        },
        {
          path:"manage-teacher-communication/:id",
          element:<MessageTeacherCommunicationOfParent/>
        },
        
        {
          path:"manage-doctor-communication",
          element:<ManageDoctorCommunicationOfParent/>
        },
        {
          path:"manage-doctor-communication/:id",
          element:<MessageDoctorCommunicationOfParent/>
        },
        
        
        {
          path:"feedback",
          element:<Feedback/>
        },
        {
          path:"manage-admin-message/:id",
          element:<ParentsMessageByAdmin/>
        },
        {
          path:"profile",
          element:<UserProfile/>
        },
        {
           path:"user-edit-profile",
           element:<EditUserProfile/>
        }
        
        
        
        
        
        
      ]
      },

      // parents login
    {
      path:"parent-login",
      element:<ParentLogin/>
      },
  
      // parents register
      {
        path:"parent-register",
        element:<ParentRegister/>
        },


  ]);

  return <RouterProvider router={router} />;
}

export default Routes;
