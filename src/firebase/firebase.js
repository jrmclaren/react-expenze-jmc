import * as firebase from 'firebase';
// Initialize Firebase
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_PROJECT_ID,
  messagingSenderId: process.env.FIREBASE_SENDER_ID
};
firebase.initializeApp(config);
const database = firebase.database();

export { firebase, database as default };

// EXAMPLE STUFF 
// 
// Setup expenses with three items 

// database.ref('expenses')
//   .once('value')
//   .then(snapshot => {
//     const expenses = [];
//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     });
//     console.log(expenses);
//   });

// database.ref('expenses').on('value', snapshot => {
//   const expenses = [];
//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   });
//   console.log(expenses);
// });

// database.ref('expenses').on('child_removed', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').push({
//   description: 'Bills',
//   note: 'Some Bills',
//   amount: 412412,
//   createdAt: -4
// });


// database.ref('expenses').push({
//   description: 'Ice Cream',
//   note: '',
//   amount: 240,
//   createdAt: 0
// });

// database.ref('notes').push({
//   title: 'To Do',
//   body: 'React Native'
// });
// database.ref('-L1Ufu-wT1qVgmvQBhzZ').update({
//   body: 'Nah'
// });

// const onValueChange = database.ref().on('value', snapshot => {
//   let obj = snapshot.val(),
//     name = obj.name,
//     job = obj.job.title,
//     company = obj.job.company;
//   console.log(`${name} is a ${job} at ${company}`);
// });

// database.ref('job/title').set('Cook');
// database.ref('job/company').set('Pollos');

// ------ Callback Method --- \\\\\
// const onValueChange = database.ref().on('value', snapshot => {
//   console.log(snapshot.val());
// }, error => {
//   console.log('Error with data handling: ', error);
// });

// setTimeout(() => {
//   database.ref('age').set(80);
// }, 3500);

// setTimeout(() => {
//   database.ref('age').off(onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(90);
// }, 10500);

// ------ Promises --- \\\\\
// database.ref('location/city')
//   .once('value')
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   }).catch(e => {
//   console.log(e);
// });

// database.ref().set({
//   name: 'Heisenberg',
//   age: 54,
//   job: {
//     title: 'sales',
//     company: 'streets'
//   },
//   stressLevel: 10,
//   location: {
//     city: 'Alburquerue',
//     country: 'United States'
//   },
//   attributes: {
//     skilled: true,
//     in: 'science'
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch(error => {
//   console.error('This failed..', error);
// });

// database.ref('attributes').set({
//   skilled: true,
//   in: 'people management'
// }).then(() => {
//   console.log('Data is updated in attributes ');
// }).catch(error => {
//   console.error('Something went horribly wrong..', error);
// });

// // database.ref('isSingle').remove()
// //   .then(() => {
// //     console.info('removed isSingle');
// //   }).catch(error => {
// //   console.error('error, no good man: ', error);
// // });
// //  
// database.ref().update(
//   {
//     name: 'Pinkman',
//     age: 24,
//     stressLevel: 4,
//     'job/title': 'Manager',
//     'job/company': 'Burbs',
//     isSingle: null,
//     'location/city': 'Dallas'
//   }
// ).then(() => {
//   console.info('updated data');
// }).catch(error => {
//   console.error('Ugh, error, ' error);
// });