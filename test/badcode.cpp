#include <stdio.h>
#include <stdbool.h>
 
 int main(void) {
   bool a = true;
   bool b = false;
   bool c = true;
 
   int condition = ((int)a << 2) | ((int)b << 1) | ((int)c);
 
   printf("%d\n", condition); // 4+1 = 5
 
   if(condition == 0x0005) {
     printf("[a, b, c] == [T ,F, T]\n");
   }
 }