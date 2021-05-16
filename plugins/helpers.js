class HelpersClass {
    constructor() {
    }

    setCookie(name, value, days) {
        let expires = '';
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = '; expires=' + date.toUTCString();
        }
        document.cookie = name + '=' + (value || '') + expires + '; path=/';
    }

    getCookie(name) {
        const nameEQ = name + '=';
        const ca = _.split(document.cookie, ';');
        let result = null;

        _.each(ca, c => {
            const char = _.trim(c);

            if (_.startsWith(char, nameEQ)) {
                result = char.substring(nameEQ.length, c.length);
            }
        });

        return result;
    }

    eraseCookie(name) {
        document.cookie = name + '=; Max-Age=-99999999;';
    }
}

const Helpers = new HelpersClass();

export default Helpers
