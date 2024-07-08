try {
    throw new Error('Something went wrong!');
} catch (error) {
    console.error(error.message);
} finally {
    console.log('This runs no matter what.');
}
