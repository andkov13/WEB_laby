document.addEventListener('DOMContentLoaded', function () {

    class Game{
        constructor(firstTeam, firstTeamLogo, secondTeam, secondTeamLogo, season, year, date, hour, minute, scoreFirstTeam, scoreSecondTeam){
            this.firstTeam = firstTeam;
            this.secondTeam = secondTeam;
            this.firstTeamLogo = firstTeamLogo;
            this.secondTeamLogo = secondTeamLogo;
            this.season = season;
            this.year = year;
            this.date = date;
            this.hour = hour;
            this.minute = minute;
            this.scoreFirstTeam = scoreFirstTeam;
            this.scoreSecondTeam = scoreSecondTeam;
        }
    }

    const currentDate = new Date();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();

    const beforeYesterday = document.querySelector('#before_yesterday');
    const yesterday = document.querySelector('#yesterday');
    const today = document.querySelector('#today');
    const tomorrow = document.querySelector('#tomorrow');
    const afterTomorrow = document.querySelector('#after_tomorrow');

    const dateList = [beforeYesterday, yesterday, today, tomorrow, afterTomorrow];
    getDates();

    beforeYesterday.addEventListener('click', dateClick);
    yesterday.addEventListener('click', dateClick);
    today.addEventListener('click', dateClick);
    tomorrow.addEventListener('click', dateClick);
    afterTomorrow.addEventListener('click', dateClick);

    const game1 = new Game('Полісся', 'polissya_logo.png', 'Динамо', 'dynamo_logo.png', 2324, 2023, '7.11', 15, 0, 0, 0);
    const game2 = new Game('Полісся', 'polissya_logo.png', 'Динамо', 'dynamo_logo.png', 2324, 2023, '7.11', 15, 0, 0, 0);
    const game3 = new Game('Зоря', 'zorya_logo.png', 'Оболонь', 'obolon_logo.png', 2324, 2023, '7.11', 17, 30, 1, 2);
    const game4 = new Game('Зоря', 'zorya_logo.png', 'Оболонь', 'obolon_logo.png', 2324, 2023, '7.11', 17, 30, 1, 2);
    const game5 = new Game('Зоря', 'zorya_logo.png', 'Оболонь', 'obolon_logo.png', 2324, 2023, '7.11', 17, 30, 1, 2);
    const game6 = new Game('Зоря', 'zorya_logo.png', 'Оболонь', 'obolon_logo.png', 2324, 2023, '7.11', 17, 30, 1, 2);
    const game7 = new Game('Зоря', 'zorya_logo.png', 'Оболонь', 'obolon_logo.png', 2324, 2023, '7.11', 17, 30, 1, 2);
    const game8 = new Game('Зоря', 'zorya_logo.png', 'Оболонь', 'obolon_logo.png', 2324, 2023, '7.11', 17, 30, 1, 2);
    const gamesList = [game1, game2, game3, game4, game5, game6, game7, game8];

    

    const currentSeason = 2324;
    const teamShowedList = document.querySelectorAll('.team');
    const teamLogoShowedList = document.querySelectorAll('.team-logo');
    const gameScoreShowedList = document.querySelectorAll('.game-score');
    const gameStatusShowedList = document.querySelectorAll('.game-status');
    const gameShowedList = document.querySelectorAll('.game');

    function dateClick(e){
        clearAll();
        e.preventDefault();
        let clickedDay = 0;
        switch(e.target.id){
            case 'before_yesterday': clickedDay = day - 2; break;
            case 'yesterday': clickedDay = day - 1; break;
            case 'today': clickedDay = day; break;
            case 'tomorrow': clickedDay = day + 1; break;
            case 'after_tomorrow': clickedDay = day + 2; break;
        }

        let j = 0;
        let k = 0;
        for(let i = 0; i < gamesList.length; i++){
            if(gamesList[i].season === currentSeason && gamesList[i].year === currentDate.getFullYear() && gamesList[i].date === `${clickedDay}.${month}`){
                teamShowedList[j].textContent = gamesList[i].firstTeam;
                teamLogoShowedList[j].src = `images/teams/${gamesList[i].firstTeamLogo}`;
                j++;
                teamShowedList[j].textContent = gamesList[i].secondTeam;
                teamLogoShowedList[j].src = `images/teams/${gamesList[i].secondTeamLogo}`;
                j++;
                if(clickedDay > day){
                    gameScoreShowedList[k].textContent = '- : -';
                    if(gamesList[i].minute >= 10 && gamesList[i].hour >= 10) gameStatusShowedList[k].textContent = `${gamesList[i].hour}:${gamesList[i].minute}`;
                    else if(gamesList[i].minute < 10 && gamesList[i].hour >= 10) gameStatusShowedList[k].textContent = `${gamesList[i].hour}:0${gamesList[i].minute}`;
                    else if(gamesList[i].minute >= 10 && gamesList[i].hour < 10) gameStatusShowedList[k].textContent = `0${gamesList[i].hour}:${gamesList[i].minute}`;
                    else gameStatusShowedList[k].textContent = `0${gamesList[i].hour}:0${gamesList[i].minute}`;
                }else if(clickedDay < day){
                    gameScoreShowedList[k].textContent = `${gamesList[i].scoreFirstTeam} : ${gamesList[i].scoreSecondTeam}`;
                    gameStatusShowedList[k].textContent = 'Заверш.';
                    gameStatusShowedList[k].style.color = '#838bff';
                }
                k++;
            }
        }
    }

    function clearAll(){
        for(let i = 0; i < teamShowedList.length; i++){
            teamShowedList[i].textContent = '';
            teamLogoShowedList[i].src = '';
            teamShowedList[i].textContent = '';
            teamLogoShowedList[i].src = '';
        }
        for(let i = 0; i < gameScoreShowedList.length; i++){
            gameScoreShowedList[i].textContent = '';
            gameStatusShowedList[i].textContent = '';
            gameStatusShowedList[i].style.color = 'white';
            //gameShowedList[i].style.visibility = 'hidden';
        }
    }

    function getDates(){
        const dayOfWeek = currentDate.getDay();
        //const hour = currentDate.getHours();
        //const minute = currentDate.getMinutes();
        //const year = currentDate.getFullYear();

        const daysOfWeek = ["нд", "пн", "вт", "ср", "чт", "пт", "сб"];

        for(let i = 0; i < 5; i++){
            dateList[i].innerText = `${day - 2 + i} . ${month} ${daysOfWeek[dayOfWeek - 2 + i]}`;
        }   
    }
});


