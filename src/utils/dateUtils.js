export const getDaysInMonth = (month) => {
    const year = month.getFullYear(); // Get the year from the given date
    const monthIndex = month.getMonth(); // Get the month index (0-based)
    const days = []; // Array to hold day objects

    // Get the total number of days in the current month
    const totalDays = new Date(year, monthIndex + 1, 0).getDate();

    for (let day = 1; day <= totalDays; day++) {
        const currentDate = new Date(year, monthIndex, day);

        days.push({
            date: formatDate(currentDate), // Formatted date string (e.g., 'YYYY-MM-DD')
            label: day, // The day number
            isToday: isToday(currentDate), // Check if the day is today
            isWeekend: isWeekend(currentDate), // Check if the day is a weekend
        });
    }

    return days; // Return the array of days
};

export const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Ensure 2-digit month
    const day = String(date.getDate()).padStart(2, '0'); // Ensure 2-digit day

    return `${year}-${month}-${day}`; // Return in 'YYYY-MM-DD' format
};

// Helper function to check if a given date is today
const isToday = (date) => {
    const today = new Date();
    return (
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
    );
};

// Helper function to check if a given date is a weekend
const isWeekend = (date) => {
    const day = date.getDay();
    return day === 0 || day === 6; // 0 = Sunday, 6 = Saturday
};
