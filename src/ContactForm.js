// import React, { useRef } from "react";

// export default function Contact() {
//     let Bodyref = useRef();
//     let Subjectref = useRef();

//     function submit(){
//         let text1 = Bodyref.current.value
//         let text2 = Subjectref.current.value


//         Email.send ({
//         SecureToken : "8bb97308-bc8b-4591-8fe9-d11b9f1b4407",
//         To :  'chrisbrowne91@gmail.com',
//         From : 'ccbrowne91@gmail.com',
//         Subject : text2,
//         Body : text1
// })
//   .then(
//           message => alert("Sent, Thank you for your feedback!")
//         )
// }

//   return (
//     <div className="container2">
      
//       <form>
//         <input type="text" placeholder="Subject" ref={Subjectref} id="Subject" />
//         <br />
//         <br />
//         <input type="text" placeholder="Body" ref={Bodyref} id="Body" />
//         <br />
//         <br />
//         <input type="submit" id="submit" onSubmit={() => submit()} />
//       </form>
//     </div>
//   );
// }
