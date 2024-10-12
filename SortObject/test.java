class Solution {
    List<String> ans = new ArrayList<>();
    
    public List<String> generateParenthesis(int n) {
        helper("", n, n);
        return ans;
    }

    void helper(String current, int left, int right) {
        if (left == 0 && right == 0) {
            ans.add(current);
            return;
        }

        if (left > 0) {
            helper(current + "(", left - 1, right);
        }
        if (right > left) {
            helper(current + ")", left, right - 1);
        }
    }
}
