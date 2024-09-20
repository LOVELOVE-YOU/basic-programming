// rafale.com -> No
// zany@ -> No
// turn@utk.ac.th -> Yes
// poppy@gmail.com -> Yes

const database = [
    {
        email: 'User@gmail.com',
        password: 'loveyou3000'
    }
]
function register(email: string, password: string) {
    if (email.includes("@") && email.lastIndexOf("@") != email.length - 1) {
        if (password.length > 8 && password.length < 16) {
            const userobject = {
                email: email,
                password: password
            }
            database.push(userobject)
            alert('สมัครสมาชิกเรียบร้อยแล้ว ยินดีต้อนรับ ท่าน' + email + ' เย่ะ วู้ววววว!!! ')
        } else {
            alert('รหัสผ่านต้องมากกว่า 8 ตัว และไม่เกิน 16 ตัว')
        }

    } else {
        alert('Email Incorrect')
    }

}

register('Jefดt02@gmail.com', 'OvErLaYlode852')


//---------------------------------------------------------------------------

// กฏการเข้ารหัส
// เปลี่ยนตัว u เป็น +
// เปลี่ยน 6 เป็น *
// เปลี่ยน 0 เป็น  ^

//+u6*^ --> ++**^^ --> uu6600

const database0 = [
    {
        email: 'User@gmail.com',
        password: 'loveyo+3^^^'
    },
    {
        email: 'Fangirl@mail.com',
        password: '64875430lkl'
    },
    {
        email: 'Germini@mail.com',
        password: '47*574301'
    }
]

function decryptPassword(password: string) {
    return password.replaceAll('+', 'u').replaceAll('*', '6').replaceAll('^', '0')
}

function login(email: string, password: string) {
    const user = database.filter(function (element, index) {
        return element.email === email
    })
    if (user.length > 0) {
        if (decryptPassword(user[0].password) === password) {
            alert("Login success")
        } else {
            alert('Password Incorrect')
        }
    } else {
        alert("User not found")
    }
}

login('User@gmail.com', 'loveyou3000')

//---------------------------------------------------------------------------