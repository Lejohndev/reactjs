import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const ChatBox = ({ isLoggedIn, userInfo }) => {
    useEffect(() => {
        (function(d, m) {
            var kommunicateSettings = {
                "appId": "781afa0eac45914ae444af25d1c32f3e",
                "popupWidget": true,
                "automaticChatOpenOnNavigation": true
            };
            
            if (isLoggedIn && userInfo) {
                kommunicateSettings.userId = userInfo.email;
                kommunicateSettings.userName = userInfo.lastName;
            }
            
            var s = document.createElement("script");
            s.type = "text/javascript";
            s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0];
            h.appendChild(s);
            window.kommunicate = m;
            m._globals = kommunicateSettings;
        })(document, window.kommunicate || {});
    }, [isLoggedIn, userInfo]);

    return null;
};

const mapStateToProps = state => ({
    isLoggedIn: state.user.isLoggedIn,
    userInfo: state.user.userInfo
});

export default connect(mapStateToProps)(ChatBox);