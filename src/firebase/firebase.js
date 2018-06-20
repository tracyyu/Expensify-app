import * as firebase from 'firebase';

const config = {
      // Initialize Firebase
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_OFF_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database  as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());  
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());  
// });

// database.ref('expenses')
//     .on('value',
//         (snapshot) => {
//             const expenses = [];
//             snapshot.forEach((childSnapshot) => {
//                 expenses.push({
//                     id: childSnapshot.key,
//                     ...childSnapshot.val()
//                 })
//             });
    
//             console.log(expenses);
//         });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         });

//         console.log(expenses);
//     });

// database.ref('expenses').push({
//     id: '1',
//     description: 'Gum',
//     text: '',
//     amount: 195,
//     createdAt: 0
// })

// database.ref('expenses').push({    
//     id: '2',
//     description: 'Rent',
//     text: '',
//     amount: 109500,
//     createdAt: 23414374
// })

// database.ref('expenses').push({
//     id: '3',
//     description: 'Water',
//     text: '',
//     amount: 195,
//     createdAt: 348972943
// })

// database.ref('notes/-LF-7mBPtBAz8agEdufL').remove();

// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React Native, Angular, Python'
// });

// const firebaseNotes = {
//     notes: {
//         appssf: {
//             title: 'First note',
//             body: 'This is my note'
//         }
//     }
// };

// const notes = [{
//     id: '12',
//     title: 'First note',
//     body: 'This is my note'
// }, {
//     id: '761ase',
//     title: 'Secondt note',
//     body: 'This is my note'
// }, {
//     id: '5679',
//     title: 'Third note',
//     body: 'This is my note'
// }];

// database.ref('notes').set(notes);
// database.ref('notes/12')

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// setTimeout( ()=> {
//     database.ref('age').set(29);
// }, 3500);

// setTimeout( ()=> {
//     database.ref().off(onValueChange);
// }, 5000);

// setTimeout( ()=> {
//     database.ref('age').set(35);
// }, 7500);

// database.ref('location')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('error fetching data', e);
//     });

// database.ref().set({
//     name: 'Tracy Yu',
//     age: 24,
//     stressLevel: 6,
//     job: {
//         title: 'software developer',
//         company: 'Google'
//     }, 
//     isSingle: false,
//     location: {
//         city: 'Los Angeles',
//         country: 'United States'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((error) => {
//     console.log('This failed.', error);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });

// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('Data was removed');
//     })
//     .catch((e) => {
//         console.log('Data was not removed.', e);
//     });
