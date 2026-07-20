const statusCodes: number[] = [200, 201, 404];

for (const code of statusCodes) {
    console.log(`Validating status: ${code}`);
    // Outputs the actual numbers: 200, 201, 404
}