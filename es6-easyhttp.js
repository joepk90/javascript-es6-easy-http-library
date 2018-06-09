/**
* ES6 EasyHTTP Library
* Library for making HTTP requests


* @version 3.0.0
* @author Joe Park-Kennaby
* @license MIT
*
**/

// MDN webdocs
// The async function declaration defines an asynchronous function, which returns an AsyncFunction object.
// The await operator is used to wait for a Promise. It can only be used inside an async function.


class EasyHTTP {

  // get(url) {
  //   // Make a HTTP GET Request (Not asynchronous)
  //   //   fetch(url)
  //   //   .then(res => res.json())
  //   //   .then(data => data)
  //   //   .catch(err => err)
  //   // }
  //
  //   // Make a HTTP GET Request using a promise (asynchronous)
  //   return new Promise((resolve, reject) => {
  //     fetch(url)
  //     .then(response => response.json())
  //     .then(data => resolve(data))
  //     .catch(err => reject(err))
  //   });
  // }

  async get(url) {
    const response = await fetch(url);

    const responseData = await response.json();
    return responseData;
  }

  // post(url, data) {
  //
  //   // Make a HTTP GET Request using a promise (asynchronous)
  //   return new Promise((resolve, reject) => {
  //     fetch(url, {
  //       method: 'POST',
  //       headers: {
  //         'Content-type': 'application/json'
  //       },
  //       body: JSON.stringify(data)
  //     })
  //     .then(response => response.json())
  //     .then(data => resolve(data))
  //     .catch(err => reject(err))
  //   });
  // }

  async post(url, data) {

    // Make a HTTP GET Request using a promise (asynchronous)

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const responseData = await response.json();
    return responseData;
  }



  // put(url, data) {
  //
  //   // Make a HTTP PUT Request using a promise (asynchronous)
  //   return new Promise((resolve, reject) => {
  //     fetch(url, {
  //       method: 'PUT',
  //       headers: {
  //         'Content-type': 'application/json'
  //       },
  //       body: JSON.stringify(data)
  //     })
  //     .then(response => response.json())
  //     .then(data => resolve(data))
  //     .catch(err => reject(err))
  //   });
  // }

  async put(url, data) {

    // Make a HTTP PUT Request using a promise (asynchronous)
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const responseData = await response.json();
    return responseData;

  }

  // delete(url) {
  //
  //   // Make a HTTP DELETE Request using a promise (asynchronous)
  //   return new Promise((resolve, reject) => {
  //     fetch(url, {
  //       method: 'DELETE',
  //       headers: {
  //         'Content-type': 'application/json'
  //       }
  //     })
  //     .then(response => response.json())
  //     .then(() => resolve('Resource Deleted'))
  //     .catch(err => reject(err))
  //   });
  // }

  async delete(url) {

    // Make a HTTP DELETE Request using a promise (asynchronous)

      const resonse = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        }
      })
      const responseData = await 'Recourse Deleted';
      return responseData;
  }
}
