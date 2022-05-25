# react-toastify-provider
Higher order functions for react toastify messages

## Prerequisite:
  Install react-toastify
```
  npm install --save react-toastify
  OR
  yarn add react-toastify
```
## Usage:
```
import {showError, showInfo} from 'path/to/toast-message-provider';
showError('Something went wrong');
showInfo('Operation successful');
showError('Something went wrong', {closeOnClick: false}); // seconf parameter is optional
```
