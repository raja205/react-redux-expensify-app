import * as firebase from 'firebase'

const config = {
  apiKey:process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};

firebase.initializeApp(config)

const database = firebase.database()

export { firebase, database as default }

// database.ref('expenses').once('value').then((snapshot)=>{
//   const expenses=[]
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id:childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   });
//   console.log(expenses)
// })

// database.ref('expenses').on('value',(snapshot)=>{
//   const expenses=[]
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id:childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   });
//   console.log(expenses)
// })

// database.ref('expenses').on('child_removed',(snapshot)=>{
//   console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_changed',(snapshot)=>{
//   console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_added',(snapshot)=>{
//   console.log(snapshot.key, snapshot.val())
// })


// for (let i = 0; i < 3; i++) {
//   switch (i) {
//     case 0:
//       database.ref('expenses').push({
//         description: 'room rent',
//         note: 'paid',
//         amount: 1300,
//         createdAt: 'monday'
//       })
//       break;
//     case 1:
//       database.ref('expenses').push({
//         description: 'water bill',
//         note: 'paid',
//         amount: 500,
//         createdAt: 'tuesday'
//       })
//       break;
//     case 2:
//       database.ref('expenses').push({
//         description: 'power bill',
//         note: 'paid',
//         amount: 500,
//         createdAt: 'wednesday'
//       })
//       break;
//     default:
//   }
// }







// database.ref('notes/-MBDphcYcnIWxyOUY9Ui').remove()



// database.ref('notes').push({
//   title:'no',
//   body:'2020'
// })


//   const firebaseNotes = {
//     notes:{
//       12:{
//         title:'first note',
//         body:'this is my note'
//       },
//       13:{
//         title:'first note',
//         body:'this is my note'
//       }
//     }
//   }

//   const notes = [{
//     id:'12',
//     title:'first note',
//     body:'this is my note'
//   },{
//     id:'13',
//     title:'first note',
//     body:'this is my note'

//   }
// ]

// database.ref('notes').set(notes)

  // database.ref().set({
  //   name:'Raja',
  //   age:26,
  //   stressLevel:6,
  //   job:{
  //     title:'Developer',
  //     company:'Google'
  //   },
  //   location:{
  //     city:'WDC',
  //     country:'USA'
  //   }
  // }).then((data)=>{
  //   console.log('data saved')
  // }).catch((e)=>{
  //     console.log('this failes')
  // })

//   database.ref().on('value',(snapshot)=>{
//     console.log(`${snapshot.val().name} is a ${snapshot.val().job.title} in ${snapshot.val().job.company}`)
// })
// setTimeout(()=>{
//   database.ref().update({
//     name:'Mike',
//     'job/company':'Amazon'
//   })
// },5000)




// const onVlaueChange = database.ref().on('value',(snapshot)=>{
//     console.log(snapshot)
// },(e)=>{
//     console.log('error',e)
// })

// database.ref().off(onVlaueChange)

//   setTimeout(()=>{
//     database.ref('age').set(98)
//   },3500)



  // database.ref('isSingle').set(null)

// database.ref('isSingle').remove().then(()=>{
//   console.log('isSingle removed')
// }).catch((e)=>{
//   console.log(e)
// })

  // database.ref().update({
  //   stressLevel:9,
  //   'job/company':'Amazon',
  //   'location/city':'Seattle'
  // })

  // database.ref('location/city')
  //  .once('value')
  //  .then((snapshot)=>{
  //     const val = snapshot.val()
  //     console.log(val)
  //  })
  //  .catch((e)=>{
  //    console.log('error fetchig',e)
  //  })