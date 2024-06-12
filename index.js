// function that get a random number and use it to get a quote from an arry of quotes

function generateQuote(){
    // use math methods to generate a random number from 0 to 1 multiply by 10 to get it from 1 to 10 divide by 2 because or array have number of quote less than 10 so that we can avoid undifined element and finally use round to get a  whole number
    var x =Math.round ((((Math.random()* 10))/2));
// check if the new value of x is equal to the last one if so generate another one 
while(x===y){
        x =Math.round ((((Math.random()* 10))/2)); 
    }


    // array of strings that contain our quot's

    var Quote = [' “Be yourself; everyone else is already taken.” ',' “Two things are infinite: the universe and human stupidity; and I.\'m not sure about the universe.” ','Don.\'t walk in front of me… I may not follow Donot walk behind me… I may not lead Walk beside me… just be my friend” ',' “If you tell the truth, you don.\'t have to remember anything.” ','The fool doth think he is wise, but the wise man knows himself to be a fool.','“That which does not kill us makes us stronger.” ','“Everything you can imagine is real.” ']

    // array of strings that contain auther's of  quotes

    var author =['Oscar Wilde ',' Albert Einstein ',' ― Albert Camus ',' ― Mark Twain ',' William Shakespeare',' Friedrich Nietzsche',' Pablo Picasso ']

    // put quote in html element
    document.getElementById('quoteOutput').innerHTML=Quote[x];

        // put author in html element

    document.getElementById('authorOutput').innerHTML=author[x];
// make variable that saves last value of x 
    var y = x ;
}