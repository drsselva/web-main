import React, { useEffect } from 'react'
import Header from '../../component/Header/Header'
import Footer from "../../component/Footer/Footer"
import "../../css/aos.css"
import "../../css/main.css"
import { useState } from 'react'
import axios from 'axios'
import personstudyingatadesk from "../../assets/img/study/personstudyingatadesk2.jpg"
import { BASE_URL1 } from '../constant'
import Toast, { toast } from 'react-toastify'
import moment from 'moment'
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import './styles.css'
import { useNavigate } from 'react-router-dom'
import Modal from 'react-modal';
import LoadingSpinner from '../LoadingSpinner/Loadingspinner'
function Createcourse() {
   const Navigate = useNavigate()

   const [uploadData, setUploadData] = useState()
   const [title, settitle] = useState("")
   const [contentImage, setcontentImage] = useState("")
   const [datetime, setdatetime] = useState(new Date())
   const [Description, setDescription] = useState("")
   const [Content, setContent] = useState("")
   const [Feedbackform, setFeedbackform] = useState("")
   const [EducatorId, setEducatorId] = useState("")
   const [modalIsOpen, setIsOpen] = useState(false);
   const [link, setLink] = useState("")
   const [isLoading, setIsLoading] = useState(false);


   useEffect(() => {
      console.log("*****",localStorage)
      var useriddd = localStorage.getItem("useriddd")
      setEducatorId(useriddd)
   }, [])

   const options = [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
   ];
   // const classes = useStyles();

   const uploadFile = () => {
      const headers = {
         'content-type': 'multipart/form-ability',
      }
      console.log(uploadData)
      let formData = new FormData();
      formData.append("file", uploadData)

      axios.post("http://44.203.0.129:8989/api/uploadFile", formData, { headers })
         .then((res) => {
            console.log(res)
         })
         .catch((err) => {
            console.log(err)
         })
   }
   // var changeddate = moment(datetime).format("YYYY-MM-DD HH:mm:ss");
   // console.log(changeddate, "datw")

   const submit = () => {
      if(title == ""){
         toast.error("Please Enter the title")
      }
      else if(contentImage == ""){
         toast.error("Please select the content image less than 1 MB")
      }
      else if(datetime == ""){
         toast.error("Please Select the Scheduled Date and Time")
      }
      else if(Description == ""){
         toast.error("Please enter the description not more than 300 characters")
      }
      else if(Content == ""){
         toast.error("Please Select the Content Less than 7MB")
      }
      else if(Feedbackform == ""){
         toast.error("Please Select the Feedbackform")
      }
      else{
      setIsOpen(true)
      var changeddate = moment(datetime).format("YYYY-MM-DD HH:mm:ss");
      // console.log(changeddate,"datw")
      let formData = new FormData();
      // formData.append("file", uploadData)
      formData.append("imageB64", contentImage)
      formData.append("videoFile", Content)
      formData.append("pdfFile", Feedbackform)
      formData.append("title", title)
      formData.append("scheduledTime", changeddate)
      formData.append("description", Description)
      formData.append("educatorId", EducatorId)
      formData.append("courseLink", link)

      axios.post("http://44.203.0.129:8989/course/session/create", formData)
         .then((res) => {
            console.log(res.data, "responsecreatecourse")
            toast.success("Course Created Successfully")
            Navigate("/educatordashboard")
            setIsOpen(false)
         })
         .catch((err) => {
            setIsOpen(false)
            console.log(err.response.data, "ssssssssssss")
         })

      }
   };
   // const submit = async () => {
   //    // if(title == ""){
   //    //    toast.error("Please Enter the title")
   //    // }
   //    let formData = new FormData();
   //    // formData.append("file", uploadData)
   //    formData.append("imageB64", contentImage)
   //    formData.append("videoFile", Content)
   //    formData.append("pdfFile", Feedbackform)
   //    formData.append("title", title)
   //    formData.append("scheduledTime", datetime)
   //    formData.append("description", Description)
   //    formData.append("educatorId", EducatorId)

   //    // for (var pair of formData.entries())
   //    // {
   //    //  console.log(pair[0]+ ', '+ pair[1]); 
   //    // }
   //    // console.log(formData, "formDataformDataformDataformData")


   //    try {

   //       const response = await axios({
   //          method: "post",
   //          url:'http://44.203.0.129:8989/course/session/create',
   //          data: formData,
   //          // headers: { "Content-Type": "multipart/form-data" },
   //       })
   //       console.log(response.data, "getallcoursesapi")

   //       .catch((err) => {
   //          // if (err.response.data.error.reason) {
   //          //    toast.error(err.response.data.error.reason)
   //          // }
   //          // else {
   //          //    toast.error("Somethign went wrong")
   //          // }
   //          console.log(err.response,"SSSSSSSSS")
   //       })
   //    }
   //    catch (err) {
   //       console.log("errorgetbanners", err.response)
   //    }
   // }

   const contentimage64 = (files) => {
      const reader = new FileReader()

      reader.readAsDataURL(files)

      reader.onload = () => {
         //   console.log('called: ', reader.result)
         setcontentImage(reader.result)
      }

   }

   const customStyles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
      },
    };
    
   return (
      <>
         <Header />
         <main id="main" class="create-course-wrapper data-img tp-page sticked-header-offset">
            <section id="create-course" class="create-course pt-large">
               <div class="container aos_init aos-animate" >
                  <div class="row gy-5 align-items-center create-course-banner-wrap" >
                     <div class="col-lg-6 d-flex flex-column res-mt justify-content-center relative text-center text-lg-start"
                        data-aos="fade-up" data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000">
                        <div class="create-course-inner bg-white position-relative">
                           <form action="#" class="create-course-form">
                              {/* <div class="form-group">
                              <input type="text" class="form-control" placeholder="Name" required />
                           </div> */}
                              <div class="form-group">
                                 <input type="text" onChange={(e) => settitle(e.target.value)} class="form-control" placeholder="Course Title" required />
                              </div>
                              <div class="form-group">
                                 <label class="uploadd uploading uploadingtext">Upload Content Image</label>
                                 <input type="file" onChange={(e) => contentimage64(e.target.files[0])} name="fileupload" id="fileupload" class="form-control mb-3" placeholder="Upload content Image" />
                              </div>
                              <div class="form-group">
                                 <label class="uploadd uploading uploadingtext">Add Google Meet Link</label>
                                 <input type="link" onChange={(e) => setLink(e.target.value)} class="form-control" placeholder="https://" required/>
                              </div>
                              {/* <div class="form-group mt-3">
                              <select class="form-select" required>
                                 <option selected>Duration</option>
                                 <option value="1">30 Hours</option>
                                 <option value="2">50 Hours</option>
                                 <option value="3">70 Hours</option>
                              </select>
                           </div> */}
                              <div class="form-group">
                                 <label class="uploadd uploading uploadingtext">Scheduled Date & Time</label>


                              </div>
                              <DateTimePicker onChange={setdatetime} value={datetime} class="form-control" />


                              {/* <div class="form-group mt-3">
                                 <select class="form-select" required>
                                    <option selected>Mode ( Online / Offline )</option>
                                    <option value="1">Online</option>
                                    <option value="2">Offline</option>
                                 </select>
                              </div> */}

                              <div class="form-group">
                                 <textarea className='textareabox' name="message" onChange={(e) => setDescription(e.target.value)} rows="5" required placeholder="Short Description Less than  300 characters" ></textarea>
                              </div>


                              <div class="form-group uploadd">
                                 <label class="uploading uploadingtext">Upload Content</label>
                                 <input type="file" onChange={(e) => setContent(e.target.files[0])} name="fileupload" id="fileupload" class="form-control mb-3" placeholder="Upload Your content Less than 7MB" />
                              </div>

                              <div class="form-group uploadd">
                                 <label class="uploading uploadingtext">Feedback Form</label>
                                 <input type="file" onChange={(e) => setFeedbackform(e.target.files[0])} name="fileupload" id="fileupload" class="form-control mb-3" placeholder="Upload Your content" />
                              </div>

                              <div class="form-group mb-0">
                              </div>

                           </form>
                           <button onClick={submit} class="form-control btn btn-primary rounded submit px-3">Upload</button>

                        </div>
                     </div>
                     <div class="col-lg-6 text-center ps-lg-5" data-aos="fade-down" data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000">
                        <div class="create-course-img">
                           <img src={personstudyingatadesk} class="img-fluid" alt="" />
                        </div>
                     </div>
                  </div>
               </div>


            </section>
         </main>
         <Modal
        isOpen={modalIsOpen}
      //   onAfterOpen={afterOpenModal}
      //   onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
     <LoadingSpinner />
      </Modal>
         <Footer />
      </>
   )
}

export default Createcourse