import React, { useState, Fragment } from 'react'
import axios from 'axios'
import Message from './components/Message'
import Progress from './components/Progress'
import { Helmet } from 'react-helmet'

function Success() {
    const [file, setFile] = useState()
    const [filename, setFilename] = useState("Choose File")
    const [uploadedFile, setUploadedFile] = useState({})
    const [message, setMessage] = useState('')
    const [uploadPercentage, setUploadPercentage] = useState(0)



    function handleChangeEvent(e) {
        setFile(e.target.files[0])
        setFilename(e.target.files[0].name)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('file', file)

        try {
            const res = await axios.post('/success', formData, {
                headers: {
                    'content-type': 'multipart/form-data',
                },
                // For Progress Bar
                onUploadProgress: progressEvent => {
                    setUploadPercentage(
                        parseInt(
                            Math.round((progressEvent.loaded * 100) / progressEvent.total)
                        )
                    )
                }
            })

            // Clearing states
            setTimeout(() => setFile(), 2000);
            setTimeout(() => setFilename('Choose File'), 5000);
            setTimeout(() => setUploadedFile({}), 5000);
            setTimeout(() => setMessage(''), 5000);
            setTimeout(() => setUploadPercentage(0), 5000);


            const { fileName, filePath } = res.data

            setUploadedFile({ fileName, filePath })
            setMessage('File Uploaded')

        } catch (err) {
            if (err.response.status === 500) {
                setMessage("There was a problem with the server")
            } else {
                setMessage(err.response.data.msg)
            }
        }
    }

    return (
        <>
        <Helmet>
                <title>Upload Portal | Attract Interviews</title>
            </Helmet>
            <div className="terms_servicecontainer">
                <br></br>
                <div className="terms_service_cards text-center">
                    <div>
                        <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M34.5 18L20.865 31L14.5 24.9614" stroke="#24B47E" stroke-width="2"
                                stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round">
                            </path>
                            <path d="M24.5 47C37.2025 47 47.5 36.7025 47.5 24C47.5 11.2975 37.2025 1 24.5 
                              1C11.7975 1 1.5 11.2975 1.5 24C1.5 36.7025 11.7975 47 24.5 47Z" stroke="#24B47E"
                                stroke-width="2" stroke-miterlimit="10">
                            </path>
                        </svg>
                    </div>
                    <div className="mt-2">
                        <span className="fs-4 text-black">Thanks for your payment</span>
                    </div>
                    <div className="mt-2 mb-4">
                        <span>A payment to ATTRACT INTERVIEWS will appear on your statement.</span>
                    </div>
                    <h3 className='resume-portal-heading'>Please upload your latest resume/cover-letter using below portal (Please upload one file at a time).</h3>
                    <Fragment>
                        {message ? <Message msg={message} /> : null}
                        <form onSubmit={handleSubmit} className="resume-portal">
                            <div className="custom-file mb-4 ">
                                <input type='file' onChange={handleChangeEvent} className="custom-file-input"
                                    id="customFile" accept='.pdf, .doc, .docx' />
                                <label className="custom-file-label" htmlFor="customFile">{filename}</label>
                            </div>

                            <Progress percentage={uploadPercentage} />

                            <input type="submit" className='btn btn-primary btn-block mt-4' value="Upload" />

                        </form>
                        {uploadedFile ? (
                            <div className='row mt-4'>
                                <div className='col-md-6 m-auto'>
                                    <h5 className='text-center upl-text-mobile'>{uploadedFile.fileName}</h5>
                                </div>
                            </div>
                        ) : null}
                    </Fragment>
                </div>
            </div>
        </>
    )
}

export default Success