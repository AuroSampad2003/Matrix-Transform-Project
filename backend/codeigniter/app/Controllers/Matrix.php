<?php

namespace App\Controllers;

class Matrix extends BaseController {
    public function transform() {
        $matrix = range(1, 36);
        $matrix = array_chunk($matrix, 6);
        return json_encode($this->rotateMatrix($matrix));
    }

    private function rotateMatrix($matrix) {
        $n = count($matrix);
        $newMatrix = $matrix;

        for ($i = 0; $i < $n; $i++) {
            $newMatrix[0][$i] = $matrix[$i][$n - 1];
            $newMatrix[$i][$n - 1] = $matrix[$n - 1][$i];
            $newMatrix[$n - 1][$i] = $matrix[$i][0];
            $newMatrix[$i][0] = $matrix[0][$i];
        }

        return $newMatrix;
    }
}
?>
