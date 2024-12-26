function generateMatrixInputs() {
    const rows = parseInt(document.getElementById("rows").value);
    const columns = parseInt(document.getElementById("columns").value);
    const container = document.getElementById("matrix-container");

    if (rows > 0 && columns > 0) {
        container.innerHTML = `
            <div class="matrix">
                <h3>Matrix A</h3>
                ${createMatrixHTML(rows, columns, "A")}
            </div>
            <div class="matrix">
                <h3>Matrix B</h3>
                ${createMatrixHTML(rows, columns, "B")}
            </div>
        `;
        enableButtons(rows === columns);
    } else {
        alert("Please enter valid rows and columns!");
    }
}

function createMatrixHTML(rows, columns, matrixName) {
    let html = "<table>";
    for (let i = 0; i < rows; i++) {
        html += "<tr>";
        for (let j = 0; j < columns; j++) {
            html += `<td><input type="number" id="${matrixName}-${i}-${j}" value="0"></td>`;
        }
        html += "</tr>";
    }
    html += "</table>";
    return html;
}

function getMatrixData(matrixName, rows, columns) {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < columns; j++) {
            row.push(parseFloat(document.getElementById(`${matrixName}-${i}-${j}`).value) || 0);
        }
        matrix.push(row);
    }
    return matrix;
}

function addMatrices() {
    const rows = parseInt(document.getElementById("rows").value);
    const columns = parseInt(document.getElementById("columns").value);
    const matrixA = getMatrixData("A", rows, columns);
    const matrixB = getMatrixData("B", rows, columns);

    const result = matrixA.map((row, i) =>
        row.map((val, j) => val + matrixB[i][j])
    );

    displayResult(result);
}

function subtractMatrices() {
    const rows = parseInt(document.getElementById("rows").value);
    const columns = parseInt(document.getElementById("columns").value);
    const matrixA = getMatrixData("A", rows, columns);
    const matrixB = getMatrixData("B", rows, columns);

    const result = matrixA.map((row, i) =>
        row.map((val, j) => val - matrixB[i][j])
    );

    displayResult(result);
}

function multiplyMatrices() {
    const rowsA = parseInt(document.getElementById("rows").value);
    const colsA = parseInt(document.getElementById("columns").value);
    const matrixA = getMatrixData("A", rowsA, colsA);
    const matrixB = getMatrixData("B", colsA, colsA);

    const result = Array(rowsA)
        .fill(0)
        .map(() => Array(colsA).fill(0));

    for (let i = 0; i < rowsA; i++) {
        for (let j = 0; j < colsA; j++) {
            for (let k = 0; k < colsA; k++) {
                result[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }

    displayResult(result);
}

function inverseMatrix() {
    const rows = parseInt(document.getElementById("rows").value);
    const cols = parseInt(document.getElementById("columns").value);

    if (rows !== cols) {
        alert("Matrix inversion is only possible for square matrices!");
        return;
    }

    const matrix = getMatrixData("A", rows, cols);
    const identity = Array(rows)
        .fill(0)
        .map((_, i) => Array(cols).fill(0).map((_, j) => (i === j ? 1 : 0)));

    for (let i = 0; i < rows; i++) {
        let maxRow = i;
        for (let k = i + 1; k < rows; k++) {
            if (Math.abs(matrix[k][i]) > Math.abs(matrix[maxRow][i])) {
                maxRow = k;
            }
        }

        [matrix[i], matrix[maxRow]] = [matrix[maxRow], matrix[i]];
        [identity[i], identity[maxRow]] = [identity[maxRow], identity[i]];

        const diag = matrix[i][i];
        if (diag === 0) {
            alert("Matrix is singular and cannot be inverted!");
            return;
        }
        for (let j = 0; j < cols; j++) {
            matrix[i][j] /= diag;
            identity[i][j] /= diag;
        }

        for (let k = 0; k < rows; k++) {
            if (k !== i) {
                const factor = matrix[k][i];
                for (let j = 0; j < cols; j++) {
                    matrix[k][j] -= factor * matrix[i][j];
                    identity[k][j] -= factor * identity[i][j];
                }
            }
        }
    }

    displayResult(identity);
}

function displayResult(result) {
    const resultModal = document.getElementById("result-modal");
    document.getElementById("result").innerText = result.map(row => row.join("\t")).join("\n");
    resultModal.style.display = "block";
}

function closeModal() {
    document.getElementById("result-modal").style.display = "none";
}

function enableButtons(isSquare) {
    document.getElementById("add-btn").disabled = false;
    document.getElementById("subtract-btn").disabled = false;
    document.getElementById("multiply-btn").disabled = false;
    document.getElementById("inverse-btn").disabled = !isSquare;
}
