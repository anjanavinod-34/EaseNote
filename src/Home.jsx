import React, { use, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNote, deleteNote, editNote,search } from './redux/noteSlice'
import Swal from 'sweetalert2'

function Home() {



    const [title, setTitle] = useState("")
    const [notes, setNotes] = useState("")
    const [editId, seteditId] = useState("")
    const userNotes = useSelector(state => state.notesReducer.noteList)
    console.log(userNotes);


    const dispatch = useDispatch()


    // to add note
    const handleaddNote = () => {

        if (!title || !notes) {
            Swal.fire({
                title: "Error!",
                text: " Plase add note with title properly!",
                icon: "error"
            })

        }
        else {
            dispatch(addNote({ title, notes }))
            Swal.fire({
                title: "Success!",
                text: "Note added Successfully!",
                icon: "success"
            });

        }


        setNotes("")
        setTitle("")


    }

    // edit note



    const handleEditNote = (item) => {

        seteditId(item.id)
        setNotes(item.notes)
        setTitle(item.title)



    }

    const updateEditNote = () => {

        dispatch(editNote({ editId, title, notes }))
         Swal.fire({
                title: "Success!",
                text: "Note updated Successfully!",
                icon: "success"
            });
        setNotes("")
        setTitle("")
        seteditId("")


    }



    return (            
        <>

            <div className='p-5' style={{ minHeight: '100vh', backgroundImage: 'url(https://t4.ftcdn.net/jpg/15/24/67/35/360_F_1524673542_D6kWEeb2Jc6dCOsiaxdkaTmcyBupBrtl.jpg)' }}>

                {/* heading */}
                <div className='d-flex justify-content-center align-items-center'>
                    <h1 className='text-success' style={{ fontSize: '50px' }}>QUICK NOTE</h1>
                </div>

                {/* input form */}

                <div className='d-flex  flex-column  justify-content-center align-items-center my-5   gap-5'>

                    <div className='p-5 border rounded-5  w-50 bg-white'>

                        <div className='mb-3'>
                            <input onChange={e => setTitle(e.target.value)} type="text" className="form-control" placeholder='Enter your Note Title' value={title} />

                        </div>

                        <div className='mb-3'>
                            <textarea onChange={e => setNotes(e.target.value)} row="3" className="form-control" placeholder='Enter your Note Content' value={notes} />

                        </div>

                        <div className="mb-3 text-center">

                            {/* here i need to apply conditional rendering */}
                            {
                                !editId ?
                                    <button onClick={handleaddNote} className='btn border-white text-white bg-success me-3'>ADD</button>
                                    :
                                    <button onClick={updateEditNote} className='btn border-white text-white bg-primary me-3'>UPDATE</button>


                            }
                        </div>


                    </div>

                    {/* search button */}

                    <div className='d-flex'>
                        <input onChange={e=>dispatch(search(e.target.value))} type="text" className="form-control" placeholder='enter the note title' />
                        
                    </div>


                </div>





                <div className='row p-3 mt-3'>


                    {/* duplicated div card note */}

                    {
                        userNotes?.length > 0 ?
                            (
                                userNotes?.map(item => (
                                    <div className="col-md-4" key={item.id}>

                                        <div className='border  p-5  text-primary bg-white rounded-4'>
                                            <h5>Note Title:{item?.title}</h5>
                                            <p>Note:{item?.notes}</p>


                                            {/* edit and delete buttons */}
                                            <div className="d-flex justify-content-between align-items-center mt-5">
                                                <button onClick={() => handleEditNote(item)} className='btn px-3 pt-2 bg-warning'>EDIT</button>
                                                <button onClick={() => dispatch(deleteNote(item?.id))} className='btn px-3 pt-2 bg-danger'>DELETE</button>

                                            </div>
                                        </div>

                                    </div>
                                ))



                            ) :
                            <div className='shadow bg-white p-5 text-center'><p className='fs-5'>No Notes are added!! </p></div>

                    }








                </div>



            </div>

        </>
    )
}

export default Home