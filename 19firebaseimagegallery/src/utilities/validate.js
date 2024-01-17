const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordStrengthRegex = /^.{6,}$/;
const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;
const optionalKeys = ["uid", "to"]

export function inputValidation(obj, checkPasswordStrength)
// returs if and what key is invalid and a message about it
{
    for (let key in obj) {
        if ((obj.hasOwnProperty(key) && !optionalKeys.includes(key)) && obj[key] == '')
        {
          return [true, key, "Please enter field: " + key];
        }
        else if (key == 'email' && !emailRegex.test(obj[key]))
        {
            return [true, key, "That is not a valid email address"]
        }
        else if (checkPasswordStrength && key == 'password' && !passwordStrengthRegex.test(obj[key]))
        {
            return [true, key, "Password is not secure enough"]
        }
        else if (key == 'url' && !urlRegex.test(obj[key]))
        {
          return [true, key, "That is not a valid url"]
        }
      }
    return [false, null, ""];
}