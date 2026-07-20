// 'timeout' has a default value. 'retries' is completely optional.
const navigateTo = (url: string, timeout: number = 30000, retries?: number): void => {
    console.log(`Navigating to ${url} with a timeout of ${timeout}ms.`);
    if (retries) {
        console.log(`Will retry ${retries} times on failure.`);
    }
};

navigateTo("/home"); // Uses default timeout, no retries
navigateTo("/home", 5000); // Overrides timeout, no retries
navigateTo("/home", 5000, 2); // Overrides timeout, sets retries
