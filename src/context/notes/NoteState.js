import { useState } from "react";
import NoteContext from "./noteContext";

const Notestate = (props)=>{
const host = "http://localhost:5000"
const notesInitial = [
  {
    "_id": "6878e4b4c66155849e2faa29",
    "user": "687777a43d228ff91ba044ad",
    "title": "My Title",
    "description": "Please wake up early",
    "tag": "personal",
    "date": "2025-07-17T11:55:32.809Z",
    "__v": 0
  },

  {
    "_id": "6879d072627604b51f4f420f",
    "user": "687777a43d228ff91ba044ad",
    "title": "My Title",
    "description": "laughter help reduce stress",
    "tag": "personal",
    "date": "2025-07-18T04:45:38.159Z",
    "__v": 0
  },

  {
    "_id": "6879db59647604b51f4f4211",
    "user": "687777a43d228ff91ba044ad",
    "title": "new note",
    "description": "please accesss the playlist before 6pm",
    "tag": "YouTube",
    "date": "2025-07-18T05:27:53.962Z",
    "__v": 0
  },

  {
    "_id": "6879db59027604b51f4f4211",
    "user": "687777a43d228ff91ba044ad",
    "title": "new note",
    "description": "check the playlist updates today",
    "tag": "YouTube",
    "date": "2025-07-18T05:27:53.962Z",
    "__v": 0
  },

   {
    "_id": "6879db59626604b51f4f4211",
    "user": "687777a43d228ff91ba044ad",
    "title": "new note",
    "description": "Dont forget to bookmark videos",
    "tag": "YouTube",
    "date": "2025-07-18T05:27:53.962Z",
    "__v": 0
  },

   {
    "_id": "6879db59607604b51f4f4211",
    "user": "687777a43d228ff91ba044ad",
    "title": "new note",
    "description": "Watch the react tutorial series",
    "tag": "YouTube",
    "date": "2025-07-18T05:27:53.962Z",
    "__v": 0
  },

]

  const [notes, setNotes] =  useState(notesInitial)

  //Get all Notes
     const getNotes = async () => {
  // Api Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`,{
    method: 'GET',
    headers:  {
        'Content-Type': 'application/json',
        "auth-token" : localStorage.getitem('token')
    }
  });

  const json = await response.json()
  // console.log(json)
  setNotes(json)
 }


  //Add a Note
  const addNote = async(title, description, tag)=>{
  //TODO Api call
  // Api Call
  const response = await fetch(`${host}/api/notes/addnote`,{
    method: 'POST',
    headers:  {
        'Content-Type': 'application/json',
        "auth-token" :  localStorage.getItem('token')
    },
      body: JSON.stringify({title, description, tag})
  });
     
  const note = await response.json()
  setNotes(notes.concat(note))  

  }

  //Delete a Note
  const deleteNote = async (id)=>{
  // Api call
  const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
     method: 'DELETE',
     headers:  {

         'Content-Type': 'application/json',
          "auth-token" :  localStorage.getItem('token')
    }
     
  });
      const json = response.json();
      console.log(json)

  //console.log("deleting a note with id" + id)
  const newNotes = notes.filter((note)=>{return note._id!==id})
  setNotes(newNotes)
  }


 //Edit a Note
  const editNote = async (id, title, description, tag)=>{
 // Api Call
  const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
    method: 'PUT',
    headers:  {
        'Content-Type': 'application/json',
        "auth-token" :  localStorage.getItem('token')
    },
     body: JSON.stringify({title, description, tag})
  });


    const json = await response.json();
    console.log(json)
     
     let newNotes = JSON.parse(JSON.stringify(notes))
      //Logic to edit in the client
     for (let index = 0; index < newNotes.length; index ++){
       const element = newNotes[index];
       if(element.id === id) {
        newNotes[index].title = title;
        newNotes[index].description= description;
        newNotes[index].tag= tag;
        break;
       }
     }

  //  let newNotes = JSON.parse(JSON.stringify(notes))
  //  //Logic to Edit in client
  //  for (let index = 0; index < newNotes.length; index++) {
  //   const element = newNotes[index];
  //   if(element._id === id) {
  //       newNotes[index]. title= title;
  //       newNotes[index]. description= description;
  //       newNotes[index]. tag= tag; 
  //       break;
  //   }
  //  }

     //console.log(notes);
     setNotes(newNotes);

  }

  return(
     <NoteContext.Provider value= {{notes,addNote, deleteNote, editNote, getNotes}}>
         {props.children}
     </NoteContext.Provider>
  )
  
}

export default Notestate;

















// import { useState } from "react";
// import NoteContext from "./noteContext";




// const Notestate = (props)=>{

// //  const s1 = {
// //         "name": "Rohit",
// //         "class": "5b"
// //  }

// //  const [state,  setState] = useState(s1);
// //  const update = ()=>{
// //     setTimeout(() => {
// //          setState({
// //             "name": "Rupesh",
// //             "class": "10b"
// //          })
// //     }, 1000);

//  }

//   return(
//     <NoteContext.Provider value= {{}}>
//          {props.children}
//     </NoteContext.Provider>
//   )
  


// export default Notestate;