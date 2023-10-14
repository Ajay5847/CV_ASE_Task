import java.util.Random;

class Solution {

    public static void main(String[] args) {

        int[] arr = {1, 2, 3, 4, 5, 6, 7};

        Random random = new Random();

        for (int i = arr.length - 1; i > 0; i--) {
            // Generate a random index between 0 and i (inclusive)
            int randomIdx = random.nextInt(i + 1);

            // Swap the elements at randomIndex and i
            int temp = arr[i];
            arr[i] = arr[randomIdx];
            arr[randomIdx] = temp;
        }

        for (int value : arr) {
            System.out.print(value + " ");
        }
    }
}
