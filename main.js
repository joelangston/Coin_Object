  


    let coin = {
        state: 0,
        flip: function () {
        let coinflip = Math.floor(Math.random() * 2)
            this.state = coinflip
            return this.state
           
        },
        toString: function () {
            
            if (this.state === 0) {
                return 'Heads' + (', ')
            } else {
                return 'Tails' + (', ')
            }
        },
        toHTML: function () {
            let image = document.createElement('img');
             if (this.state === 0) {
                image.src ='./images/us-quarter-front.jpg'
               
            } else {

                image.src = './images/us-quarter-back.jpg'
            }
            return image;
        }

    }

    function display20Flips() {
        let results = []
      
        for (let index = 1; index <= 20; index += 1) {
            coin.flip()
            document.write(coin.toString())
        }
    }
    display20Flips()
    
    function display20Images() {
        let results = []
        
        for (let index = 1; index <= 20; index += 1) {
            coin.flip()
            document.querySelector('body').appendChild(coin.toHTML())
            
            
        }
    }
display20Images()


