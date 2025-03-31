document.addEventListener('DOMContentLoaded', function () {
    const timeSlots = document.querySelectorAll('.time-slot');
    const filterBtns = document.querySelectorAll('.filter-btn');

    // Initially show all time slots when the page loads
    timeSlots.forEach(slot => {
        slot.style.display = 'block';
    });

    // Event listener for selecting time slot
    timeSlots.forEach(slot => {
        slot.addEventListener('click', function () {
            // Remove 'selected' class from all slots
            timeSlots.forEach(s => s.classList.remove('selected'));
            
            // Add 'selected' class to the clicked slot
            this.classList.add('selected');
            
            // Update the form value with the selected time
            document.getElementById('availability').value = this.dataset.time;
        });
    });

    // Filter slots based on time (morning, afternoon, evening)
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const filter = this.dataset.time;
            timeSlots.forEach(slot => {
                // Hide or show the slots based on the selected filter
                if (filter === 'morning' && slot.classList.contains('time-morning')) {
                    slot.style.display = 'block';
                } else if (filter === 'afternoon' && slot.classList.contains('time-afternoon')) {
                    slot.style.display = 'block';
                } else if (filter === 'evening' && slot.classList.contains('time-evening')) {
                    slot.style.display = 'block';
                } else {
                    slot.style.display = 'none';
                }
            });
        });
    });
});