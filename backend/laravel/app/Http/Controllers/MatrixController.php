<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MatrixController extends Controller {
    public function transform() {
        $matrix = range(1, 36);
        $matrix = array_chunk($matrix, 6);
        return response()->json($this->rotateMatrix($matrix));
    }

    private function rotateMatrix($matrix) {
        $n = count($matrix);
        $newMatrix = $matrix;

        // Rotate border
        for ($i = 0; $i < $n; $i++) {
            $newMatrix[0][$i] = $matrix[$i][$n - 1];
            $newMatrix[$i][$n - 1] = $matrix[$n - 1][$i];
            $newMatrix[$n - 1][$i] = $matrix[$i][0];
            $newMatrix[$i][0] = $matrix[0][$i];
        }

        return $newMatrix;
    }
}
