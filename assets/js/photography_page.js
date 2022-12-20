 // Image - Eidsvoll
        // Mouseover (hoverFunction)
        var eidsvoll = document.querySelector('#eidsvoll');
        eidsvoll.addEventListener('mouseover', changeEidsvoll);
        function changeEidsvoll() {
            eidsvoll.style.zoom = '120%';
            eidsvoll.style.border = '5px solid #000';
        }
        // Mouseout function
        eidsvoll.addEventListener('mouseout', resetEidsvoll);
        function resetEidsvoll() {
            eidsvoll.style.zoom = '100%';
            eidsvoll.style.border = '0px'
        }
        // Interaction - showText
        eidsvoll.addEventListener('click', showTextEidsvoll);
        function showTextEidsvoll() {
            var interaction = document.querySelector('#interaction');
            interaction.innerHTML = '<p>Eidsvoll (foto, 2021)</p>';
        }


    // Image - outdoor
        // Mouseover - hoverFunction
        var outdoor = document.querySelector('#outdoor');
        outdoor.addEventListener('mouseover', changeOutdoor);
        function changeOutdoor() {
            outdoor.style.zoom = '120%';
            outdoor.style.border = '5px solid #000';
        }
        // mouseout
        outdoor.addEventListener('mouseout', resetOutdoor);
        function resetOutdoor() {
            outdoor.style.zoom = '100%';
            outdoor.style.border = '0px';
        }
        // showText
        outdoor.addEventListener('click', showTextOutdoor);
        function showTextOutdoor() {
            var interaction = document.querySelector('#interaction');
            interaction.innerHTML = '<p>Oslo (foto, 2018)</p>';
        }

    // Image - nature
        // Mouseover - hoverFunction
        var nature = document.querySelector('#nature');
        nature.addEventListener('mouseover', changeNature);
        function changeNature() {
            nature.style.zoom = '120%';
            nature.style.border = '5px solid #000';
        }
        // Mouseout
        nature.addEventListener('mouseout', resetNature);
        function resetNature() {
            nature.style.zoom = '100%';
            nature.style.border = '0px'
        }
        // showText
        nature.addEventListener('click', showTextNature);
        function showTextNature() {
            var interaction = document.querySelector('#interaction');
            interaction.innerHTML = '<p>Bydel Alna (foto, 2018)</p>';
        }

    // Image - room
        // Mouseover - hoverFunction
        var room = document.querySelector('#room');
        room.addEventListener('mouseover', changeRoom);
        function changeRoom() {
            room.style.zoom = '120%';
            room.style.border = '5px solid #000';
        }
        // mouseout
        room.addEventListener('mouseout', resetRoom);
        function resetRoom() {
            room.style.zoom = '100%';
            room.style.border = '0px';
        }
        // showText
        room.addEventListener('click', showTextRoom);
        function showTextRoom() {
            var interaction = document.querySelector('#interaction');
            interaction.innerHTML = '<p>Kristiansand (foto, 2019)</p>';
        }
    
    // Image - view
        // Mouseover - hoverFunction
        var view = document.querySelector('#view');
        view.addEventListener('mouseover', changeView);
        function changeView() {
            view.style.zoom = '120%';
            view.style.border = '5px solid #000';
        }
        // Mouseout
        view.addEventListener('mouseout', resetView);
        function resetView() {
            view.style.zoom = '100%';
            view.style.border = '0px';
        }
        // ShowText
        view.addEventListener('click', showTextView);
        function showTextView() {
            var interaction = document.querySelector('#interaction');
            interaction.innerHTML = '<p>Oslo (foto, 2020)</p>';
        }

    // Image - quote
    var quote = document.querySelector('#quote');
    quote.addEventListener('mouseover', changeQuote);
    function changeQuote() {
        quote.style.zoom = '120%';
        quote.style.border = '5px solid #000';
    }
    quote.addEventListener('mouseout', resetQuote);
    function resetQuote() {
        quote.style.zoom = '100%';
        quote.style.border = '0px';
    }
    quote.addEventListener('click', showTextQuote);
        function showTextQuote() {
            var interaction = document.querySelector('#interaction');
            interaction.innerHTML = '<p>Kalamata (foto, 2019)</p>';
        }