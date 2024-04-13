       // اینجا کد جاوا اسکریپت برای محاسبه تایمر و نمایش زمان‌ها قرار می‌گیرد
        // JavaScript code for a timer that resets every year on November 22nd at 00:00 and starts again after 12 hours

        // Function to calculate the remaining time until the reset
        function calculateRemainingTime() {
            // Get the current date and time
            const now = new Date();

            // Set the reset date to November 22nd of the current year
            //10/22
            const resetDate = new Date(now.getFullYear(), 12, 20);
            //set hour 
            resetDate.setHours(5);
            //set min 
            resetDate.setMinutes(11);

            // Calculate the time difference in milliseconds
            let timeDifference = resetDate.getTime() - now.getTime();

            // Check if the current date is past November 22nd
            if (timeDifference < 0) {
                setTimeout(updateTimerDisplay(), 12 * 60 * 60 * 1000);
                // Set the reset date to November 22nd of the next year
                resetDate.setFullYear(resetDate.getFullYear() + 1);
                // Recalculate the time difference
                timeDifference = resetDate.getTime() - now.getTime();
            }

            // Calculate the remaining time in days, hours, minutes, and seconds
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
            const month = Math.floor(days / 30);
            const week = Math.floor(days / 7 );
            // Return the remaining time as an object
            return { days, hours, minutes, seconds , month , week };
        }

        // Function to update the timer display
        function updateTimerDisplay(remainingTime) {
            // Update the DOM elements with the calculated remaining time
            // week and mount 
            document.getElementById('day').textContent = 'Day :' + remainingTime.days ;
            document.getElementById('hour').textContent = 'Hour :' + remainingTime.hours ;
            document.getElementById('minute').textContent = 'Minute :' + remainingTime.minutes ;
            document.getElementById('second').textContent = 'Secend :' + remainingTime.seconds ;
            document.getElementById('month').textContent = 'Month :' + remainingTime.month;
            document.getElementById('week').textContent = 'Week :' + remainingTime.week;

            // Check if the timer has reached zero
            if (remainingTime.days === 0 && remainingTime.hours === 0 && remainingTime.minutes === 0 && remainingTime.seconds === 0) {
                // Reset the timer after 12 hours
                //set birthday massage 
                document.getElementById('day').innerHTML = '&#x1F388;';
                document.getElementById('hour').textContent = 'Happy';
                document.getElementById('minute').textContent = 'Birthday';
                document.getElementById('second').textContent = 'To Me!';
                document.getElementById('month').innerHTML = '&#x1F388;';
                document.getElementById('week').innerHTML = '&#x1F382;' ;
            }
        }

        // Function to initialize the timer
        function initializeTimer() {
            // Calculate the remaining time
            const remainingTime = calculateRemainingTime();

            // Update the timer display
            updateTimerDisplay(remainingTime);

            // Set an interval to update the timer every second
            setInterval(() => {
                const newRemainingTime = calculateRemainingTime();
                updateTimerDisplay(newRemainingTime);
            }, 1000);
        }

        // Call the initializeTimer function when the page loads
        document.addEventListener('DOMContentLoaded', initializeTimer);
