import java.util.*;

class Solution {

    public static void main(String[] args){

        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine(); 

        if(checkPanagram(s)){
            System.out.println("Yes, String " + s + " is a Panagram");
        }
        else{
            System.out.println("No, String " + s + " not a Panagram");
        }
    }

    public static boolean checkPanagram(String s) {
        int[] arr = new int[26];
        String lowerCase = s.toLowerCase();
        int cnt = 0;
  
        for(int i = 0;i < lowerCase.length();i++){
            char c = lowerCase.charAt(i);
            // check to avoid spaces(' ') and commas(,) in the string.
            if(c >= 'a' && c <= 'z'){
                arr[c - 'a']++;
                if(arr[c - 'a'] == 1){
                    cnt++;
                }
            }
        }

        // If cnt = 26 means that all the characters are present in the string.
        if(cnt == 26){
            return true;
        }

        return false;
    }
}