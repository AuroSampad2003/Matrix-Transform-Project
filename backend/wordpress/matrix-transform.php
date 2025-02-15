<?php
function rotateMatrix($matrix) {
    $n = count($matrix);
    $newMatrix = $matrix;

    // Rotate outer border
    $top = array_slice($matrix[0], 0, $n);
    $right = array_column($matrix, $n - 1);
    $bottom = array_reverse(array_slice($matrix[$n - 1], 0, $n));
    $left = array_reverse(array_column($matrix, 0));

    for ($i = 0; $i < $n; $i++) {
        $newMatrix[0][$i] = $left[$i];   
        $newMatrix[$i][$n - 1] = $top[$i]; 
        $newMatrix[$n - 1][$i] = $right[$i]; 
        $newMatrix[$i][0] = $bottom[$i];
    }

    return $newMatrix;
}

// Generate and print matrix
$matrix = range(1, 36);
$matrix = array_chunk($matrix, 6);
print_r(rotateMatrix($matrix));
?>
