const messages = ["The ears ring with joy, the mouth widens in a crescent, like the moon in the night sky shining over the dark world, one brightens up at it's sound when they hear it coming from their world. It was strange at first, but became an addiction over time, and now it seems like a nursery rhyme. The origin unknown, the process of it becoming a habit immemorable now it seems that it was always there.",
    "Among the emotions a person feels one triumphs above all, mad in it people conquer cities, raise nations to ground, or live another day. It might be a curse for some and a blessing for other but all feel it. Truly the most twisted yet sweet one it is.",
    "The heart beats, the blood flows, in the bed of the deep crimson a light on the end. One remembers a name, the one dearest to them. ",
"who? :3",
"no u :3",
"chan? :3"]

function showMessage() {
    document.getElementById('message').innerText = messages[index];
}


function solve() {

    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    if (user === "dwittychan" && pass === "ilovedorithy") {
        window.location = "test.html"
    }

    if (user === "Toshio Furukawa" && pass === "405") {
        window.location = "mosspage1.html"
    }

    if (user === "sierra117" && pass === "ilovedwitty") {
        window.location = "love note.html"
    }
    if (user === "kittycat") {
        if (pass === "dwittychanlovesdorithychan") {
            window.location = "love note.html"
        }
        else if (pass === "dwittychan") {
            index = 1
            showMessage()
        }
        else if (pass === "love"){
            index = 3
            showMessage()
        }
        else if (pass === "loves"){
            index = 3
            showMessage()
        }
        else if (pass === "dorithy"){
            index = 5
            showMessage()
        }
        else if (pass === "dwitty"){
            index = 5
            showMessage()
        }
        else if (pass === "dorithychan"){
            index = 1
            showMessage()
        }
        else if (pass === "dwittychanlove"){
            index = 2
            showMessage()
        }
        else if (pass === "dwittychanloves"){
            index = 2
            showMessage()
        }
        else if (pass === "dorithychanloves"){
            index = 2
            showMessage()
        }
        else if (pass === "dorithychanlove"){
            index = 2
            showMessage()
        }

        else if (pass === "dorithychanlovesdwittychan"){
            window.location = "test.html"
        }

        else{
            index = 0
            showMessage()
        }



    }
}


