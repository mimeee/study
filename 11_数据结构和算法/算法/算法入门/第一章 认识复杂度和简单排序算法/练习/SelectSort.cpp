#include <iostream>
#include <string>

using namespace std;

void ChoiceSort ();
void BubbleSort ();

int main(){
	return 0;
}

void ChoiceSort () {
	int arr[5] = {1,3,5,7,9};
	for( int i = 0; i < 5; i++){
		int index = i;
		for( int j = i + 1; j < 5; j++){
			index = arr[j] > arr[index] ? j : index;
		}
		int temp = 0;
		temp = arr[i];
		arr[i] = arr[index];
		arr[j] = temp; 
	}
}


void BubbleSort () {
	int arr[5] = {1,3,5,7,9};
	for( int i = 0; i < 5; i++){
		for( int j = i ; j < 5; j++){
			if(arr[j] > arr[index]) {
				int temp = 0;
				temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp; 
			}
		}		
	}
}