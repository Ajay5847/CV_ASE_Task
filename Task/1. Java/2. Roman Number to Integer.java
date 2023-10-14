import java.util.*;

class Solution {

    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        String roman = sc.nextLine(); 

        System.out.println(romanToInt(roman));
    }

    public static int romanToInt(String s) {
        Map<Character,Integer> map = new HashMap<>();
        map.put('I',1);
        map.put('V',5);
        map.put('X',10);
        map.put('L',50);
        map.put('C',100);
        map.put('D',500);
        map.put('M',1000);
        int sum = 0;

        for(int i = s.length() - 1; i >= 0;i--){
            // If the current character value is less than the previous one, then subtract it
            if( i > 0 && map.get(s.charAt(i)) > map.get(s.charAt(i - 1))){
                sum += map.get(s.charAt(i)) - map.get(s.charAt(i - 1));
                i = i - 1;
            }
            else{
                sum += map.get(s.charAt(i));
            }
        }

        return sum;
    }
}