/**
* ES6 EasyHTTP Library
* Library for making HTTP requests


* @version 2.0.0
* @author Joe Park-Kennaby
* @license MIT
*
**/

class EasyHTTP {

  get(url) {
    // Make a HTTP GET Request (Not asynchronous)
    //   fetch(url)
    //   .then(res => res.json())
    //   .then(data => data)
    //   .catch(err => err)
    // }

    // Make a HTTP GET Request using a promise (asynchronous)
    return new Promise((resolve, reject) => {
      fetch(url)
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(err => reject(err))
    });
  }

  post(url, data) {

    // Make a HTTP GET Request using a promise (asynchronous)
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(err => reject(err))
    });
  }


  put(url, data) {

    // Make a HTTP PUT Request using a promise (asynchronous)
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(err => reject(err))
    });
  }

  delete(url) {

    // Make a HTTP DELETE Request using a promise (asynchronous)
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(() => resolve('Resource Deleted'))
      .catch(err => reject(err))
    });
  }


}
