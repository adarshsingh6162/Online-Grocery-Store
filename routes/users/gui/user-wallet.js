/* 
 * Users Routers * 
 * Users GUI *
 * Users Wallet *
 * Users Routers for GUI/Dashboard actions *

 * Functionalities Index: 
        =======================================================================================================
        | S.No. |  Type  |          URL          |   Function Call   | Controller |       Description         |
        =======================================================================================================
        |   1.  | Get    | /user/dashboardwallet | updateUser        | users      | update user wallet info   |
        -------------------------------------------------------------------------------------------------------
*/

/* importing required files and packages */
const express = require('express');
const router = express.Router();
const data = require('../../../data');
const usersData = data.users;
const passport = require('../../../config/passport-users');

/* local scoped functions */
//------ check user authenticity
function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
    } else {
		res.render('alerts/error', {
            mainTitle: "Page Not Found •",
		    code: 404,
		    message: "Page Not Found",
            url: req.originalUrl
        });
    }
}

//------------------------ route to fetch user information by email id
router.get('/', isLoggedIn, (req, res) => {
    res.render('users/gui/user-wallet', {
		mainTitle: "Dashboard • Wallet •",
		user: req.user
	});
});

// exporting routing apis
module.exports = router;